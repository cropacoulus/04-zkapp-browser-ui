import styles from "../styles/style";
import { Stats, Hero } from "../components";
import Image from "next/image";
import { close, logo, menu } from "../assets";
import Button from "../components/Button";
import { useEffect, useState } from "react";

import "./reactCOIServiceWorker";

import ZkappWorkerClient from "./zkappWorkerClient";

import {
  PublicKey,
  PrivateKey,
  Field,
} from 'snarkyjs'

export default function Home() {
  let [state, setState] = useState({
    zkappWorkerClient: null as null | ZkappWorkerClient,
    hasWallet: null as null | boolean,
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null as null | Field,
    publicKey: null as null | PublicKey,
    zkappPublicKey: null as null | PublicKey,
    creatingTransaction: false,
  });

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    (async () => {
      if (!state.hasBeenSetup) {
        const zkappWorkerClient = new ZkappWorkerClient();

        console.log("Loading SnarkyJS...");
        await zkappWorkerClient.loadSnarkyJS();
        console.log("done");

        setState({
          ...state,
          hasBeenSetup: true,
        });
      }
    })();
  }, []);

  // -------------------------------------------------------
  // Wait for account to exist, if it didn't

  useEffect(() => {
    (async () => {
      if (state.hasBeenSetup && state.hasWallet && !state.accountExists) {
        for (;;) {
          console.log("checking if account exists...");
          const res = await state.zkappWorkerClient!.fetchAccount({ publicKey: state.publicKey! });
          const accountExists = res.error == null;
          if (accountExists) {
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
        setState({ ...state, accountExists: true });
      }
    })();
  }, [state.hasBeenSetup]);

  // -------------------------------------------------------
  // connect wallet account to exist, if it didn't
  let publicKey;
  const connectWallet = async () => {
    if (state.hasBeenSetup) {
    const zkappWorkerClient = new ZkappWorkerClient();

      console.log("Loading SnarkyJS...");
      await zkappWorkerClient.loadSnarkyJS();
      console.log("done");

      await zkappWorkerClient.setActiveInstanceToBerkeley();

      const mina = (window as any).mina;

      if (mina == null) {
        setState({ ...state, hasWallet: false });
        return;
      }

      const publicKeyBase58: string = (await mina.requestAccounts())[0];
      const publicKey = PublicKey.fromBase58(publicKeyBase58);

      console.log("using key", publicKey.toBase58());

      console.log("checking if account exists...");
      const res = await zkappWorkerClient.fetchAccount({ publicKey: publicKey! });
      const accountExists = res.error == null;

      await zkappWorkerClient.loadContract();

      console.log("compiling zkApp");
      await zkappWorkerClient.compileContract();
      console.log("zkApp compiled");

      const zkappPublicKey = PublicKey.fromBase58("B62qrDe16LotjQhPRMwG12xZ8Yf5ES8ehNzZ25toJV28tE9FmeGq23A");

      await zkappWorkerClient.initZkappInstance(zkappPublicKey);

      console.log("getting zkApp state...");
      await zkappWorkerClient.fetchAccount({ publicKey: zkappPublicKey });

      setState({
        ...state,
        zkappWorkerClient,
        hasWallet: true,
        hasBeenSetup: true,
        publicKey,
        zkappPublicKey,
        accountExists,
      });
    }
  };

  let transactionFee = 0.1;
  // -------------------------------------------------------
  // Send a transaction

  const onSendTransaction = async () => {
    setState({ ...state, creatingTransaction: true });
    console.log("sending a transaction...");

    await state.zkappWorkerClient!.fetchAccount({ publicKey: state.publicKey! });

    await state.zkappWorkerClient!.createUpdateTransaction();

    console.log("creating proof...");
    await state.zkappWorkerClient!.proveUpdateTransaction();

    console.log("getting Transaction JSON...");
    const transactionJSON = await state.zkappWorkerClient!.getTransactionJSON();

    console.log("requesting send transaction...");
    const { hash } = await (window as any).mina.sendTransaction({
      transaction: transactionJSON,
      feePayer: {
        fee: transactionFee,
        memo: "",
      },
    });

    console.log("See transaction at https://berkeley.minaexplorer.com/transaction/" + hash);

    setState({ ...state, creatingTransaction: false });
  };

  // -------------------------------------------------------
  // Refresh the current state

  const onRefreshCurrentNum = async () => {
    console.log("getting zkApp state...");
    await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! });
    const currentNum = await state.zkappWorkerClient!.getNum();
    console.log("current state:", currentNum.toString());

    setState({ ...state, currentNum });
  };

  // -------------------------------------------------------
  // Create UI elements

  let hasWallet;
  if (state.hasWallet != null && !state.hasWallet) {
    const auroLink = "https://www.aurowallet.com/";
    const auroLinkElem = (
      <a href={auroLink} target="_blank" rel="noreferrer">
        {" "}
        [Link]{" "}
      </a>
    );
    hasWallet = <div> Could not find a wallet. Install Auro wallet here: {auroLinkElem}</div>;
  }

  let setupText = state.hasBeenSetup ? "SnarkyJS Ready" : "Setting up SnarkyJS...";
  let setup = (
    <div>
      {" "}
      {setupText} {hasWallet}
    </div>
  );

  let accountDoesNotExist;
  if (state.hasBeenSetup && state.hasWallet && !state.accountExists) {
    const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey!.toBase58();
    accountDoesNotExist = (
      <div>
        Account does not exist. Please visit the faucet to fund this account
        <a href={faucetLink} target="_blank" rel="noreferrer">
          {" "}
          [Link]{" "}
        </a>
      </div>
    );
  }

  let mainContent;
  if (state.hasBeenSetup && state.accountExists) {
    mainContent = (
      <div>
        <button onClick={onSendTransaction} disabled={state.creatingTransaction}>
          {" "}
          Send Transaction{" "}
        </button>
        {/* <div> Current Number in zkApp: {state.currentNum!.toString()} </div> */}
        <button onClick={onRefreshCurrentNum}> Get Latest State </button>
      </div>
    );
  } else {
    mainContent = (
      <div>
        <button >Connect Wallet</button>
      </div>
    );
  }

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <Image src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {!state.hasWallet ? 
                <Button title="Connect Wallet" onClick={connectWallet} /> 
                : <span className="text-primary font-poppins bg-blue-gradient truncate text-ellipsis w-24 rounded-sm">{state.publicKey!.toBase58()}</span>
              }
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <Image src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} />

              <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {!state.hasWallet ? 
                    <Button title="Connect Wallet" onClick={connectWallet} /> 
                    : <span className="text-primary font-poppins bg-blue-gradient truncate text-ellipsis w-24 rounded-sm">{state.publicKey!.toBase58()}</span>
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
    </div>
  );
}
