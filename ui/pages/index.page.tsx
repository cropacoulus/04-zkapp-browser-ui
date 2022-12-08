import styles from "../styles/style";
import { Stats, Hero } from "../components";
import Image from "next/image";
import { close, auro, menu } from "../assets";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "./reactCOIServiceWorker";
import "react-toastify/dist/ReactToastify.css";

import ZkappWorkerClient from "./zkappWorkerClient";

import { PublicKey, PrivateKey, Field, isReady } from "snarkyjs";

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

  // -------------------------------------------------------
  // Wait for account to exist, if it didn't

  // -------------------------------------------------------
  // connect wallet account to exist, if it didn't
  const connectWallet = async () => {
    if (!state.hasBeenSetup) {
      const zkappWorkerClient = new ZkappWorkerClient();

      await toast.promise(zkappWorkerClient.loadSnarkyJS(), {
        pending: "Setting up SnarkyJS...",
        success: "Snarky JS is Ready",
      });

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
      const res = await toast.promise(zkappWorkerClient.fetchAccount({ publicKey: publicKey! }), { pending: "Checking if account exists" });
      const accountExists = res.error == null;

      await zkappWorkerClient.loadContract();

      await toast.promise(zkappWorkerClient.compileContract(), {
        pending: "Checking if account have a balance",
      });

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
      <a href={auroLink} target="_blank" rel="noreferrer" className="text-blue-600">
        here
      </a>
    );
    hasWallet = (
      <>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-primary rounded-md shadow-lg">
              <div className="mt-3 sm:flex flex-col justify-items-center">
                <div className="flex items-center justify-center flex-none w-24 h-24 mx-auto">
                  <Image src={auro} className="w-[64px] h-[64px]" alt="Alva" title="Alva" />
                </div>
                <div className="mt-2 text-center sm:ml-4 sm:text-left">
                  <h4 className="text-lg font-semibold text-white w-full">Could not find a wallet</h4>
                  <p className="mt-2 text-[15px] text-center leading-relaxed text-gray-500">Install Auro wallet {auroLinkElem}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    // hasWallet =  <div> Could not find a wallet. Install Auro wallet here: {auroLinkElem}</div>;
  }

  let accountDoesNotExist;
  if (state.hasBeenSetup && state.hasWallet && !state.accountExists) {
    const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey!.toBase58();
    accountDoesNotExist = (
      <>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-primary rounded-md shadow-lg">
              <div className="mt-3 sm:flex">
                <div className="flex items-center justify-center flex-none w-24 h-24 mx-auto ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-64 h-64 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-center sm:ml-4 sm:text-left">
                  <h4 className="text-lg font-semibold text-white w-full">Account does not have balance. </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    Please visit the faucet to fund this account{" "}
                    <a href={faucetLink} target="_blank" rel="noreferrer" className="text-blue-600">
                      here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
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
        <button>Connect Wallet</button>
      </div>
    );
  }

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {!state.accountExists ? <Button title="Connect Wallet" onClick={connectWallet} /> : <span className="text-primary font-poppins bg-blue-gradient truncate text-ellipsis w-24 rounded-sm">{state.publicKey!.toBase58()}</span>}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <Image src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} />

              <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {!state.accountExists ? <Button title="Connect Wallet" onClick={connectWallet} /> : <span className="text-primary font-poppins bg-blue-gradient truncate text-ellipsis w-24 rounded-sm">{state.publicKey!.toBase58()}</span>}
                </ul>
              </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} theme="dark" />
          </nav>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          {hasWallet}
          {accountDoesNotExist}
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
