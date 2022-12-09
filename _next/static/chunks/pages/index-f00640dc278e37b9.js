(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 9208:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(3942);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 3942:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./styles/style.js
const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6"
};
const layout = {
    section: "flex md:flex-row flex-col ".concat(styles.paddingY),
    sectionReverse: "flex md:flex-row flex-col-reverse ".concat(styles.paddingY),
    sectionImgReverse: "flex-1 flex ".concat(styles.flexCenter, " md:mr-10 mr-0 md:mt-0 mt-10 relative"),
    sectionImg: "flex-1 flex ".concat(styles.flexCenter, " md:ml-10 ml-0 md:mt-0 mt-10 relative"),
    sectionInfo: "flex-1 ".concat(styles.flexStart, " flex-col")
};
/* harmony default export */ var style = (styles);

;// CONCATENATED MODULE: ./constants/index.js
const stats = [
    {
        id: "stats-1",
        title: "Mina Blockchain",
        subtitle: "FIXED SIZE",
        value: 22,
        unit: "KB"
    },
    {
        id: "stats-2",
        title: "Others Blockchains",
        subtitle: "INCREASING SIZE",
        value: 300,
        unit: "GB"
    }
];

;// CONCATENATED MODULE: ./components/Stats.tsx



const Stats = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "".concat(style.flexCenter, " flex-row flex-wrap sm:mb-20 mb-6"),
        children: stats.map((stat)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex-1 flex justify-center items-center flex-row m-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                        className: "font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white",
                        children: [
                            stat.value,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("small", {
                                children: stat.unit
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3",
                        children: stat.title
                    })
                ]
            }, stat.id))
    });
/* harmony default export */ var components_Stats = (Stats);

;// CONCATENATED MODULE: ./assets/binance.png
/* harmony default export */ var binance = ({"src":"/04-zkapp-browser-ui//_next/static/media/binance.6fce11aa.png","height":78,"width":385,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANklEQVR42mNwdHCLd3R0cwHSgSDs5ODmCWV7A3EYA1AyDoidHB3cQYK+QBwMxEFA7OXk4BYMAD95EXe/N3oFAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./assets/coinbase.png
/* harmony default export */ var coinbase = ({"src":"/04-zkapp-browser-ui//_next/static/media/coinbase.f1f63ef2.png","height":83,"width":379,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOElEQVR4nGN0dHDTY2BgYGVkYOD/D8RA9m8gvg/E7EDMAlJQDGQwMzIwcv1n+P8FyOaB4j9AzAYAL4EJVTLZ0F4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./assets/logo.svg
/* harmony default export */ var logo = ({"src":"/04-zkapp-browser-ui//_next/static/media/logo.e6e99938.svg","height":73,"width":266});
;// CONCATENATED MODULE: ./assets/Send.svg
/* harmony default export */ var Send = ({"src":"/04-zkapp-browser-ui//_next/static/media/Send.0036114a.svg","height":32,"width":33});
;// CONCATENATED MODULE: ./assets/menu.svg
/* harmony default export */ var menu = ({"src":"/04-zkapp-browser-ui//_next/static/media/menu.d4003f94.svg","height":12,"width":20});
;// CONCATENATED MODULE: ./assets/close.svg
/* harmony default export */ var assets_close = ({"src":"/04-zkapp-browser-ui//_next/static/media/close.80b4ae8f.svg","height":18,"width":18});
;// CONCATENATED MODULE: ./assets/arrow-up.svg
/* harmony default export */ var arrow_up = ({"src":"/04-zkapp-browser-ui//_next/static/media/arrow-up.c5987a52.svg","height":21,"width":22});
;// CONCATENATED MODULE: ./assets/robot.png
/* harmony default export */ var robot = ({"src":"/04-zkapp-browser-ui//_next/static/media/robot.c35bf057.png","height":1348,"width":1338,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mMIOHfLt/fZ62MMQNDaO8+grnGqLYi9eetBRgYQMDp2gzt47ymHqvY57dMnL/u2eNnW/03d84pAcvOX72AGK8pqmhKRt2Hf/57dJ/7v2HH4yOVr1/2WrF/LwgADS7paxdsWrFvTNGfD/97JK/9P7JlbCxKvmbGJCazAPSLTJzS25kdiVt8318im1upLtwr+///PBDeh5f9/gZbpa0JW7D8X8P//f5nC7Ydj5t57KQFXkFDZp5tV03t+ytb9/+cevfI/LLbsdkrezK8RcbPvwBVZ+cTbqOgHFen5VjkAuay2WtmBbp7VxwCSPGvBWrtBCgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/auro.svg
/* harmony default export */ var auro = ({"src":"/04-zkapp-browser-ui//_next/static/media/auro.0d9efb4d.svg","height":100,"width":100});
;// CONCATENATED MODULE: ./assets/index.js











// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/GetStarted.tsx




const GetStarted = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "".concat(style.flexCenter, " w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer"),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "".concat(style.flexCenter, " flex-col bg-primary w-[100%] h-[100%] rounded-full"),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "".concat(style.flexStart, " flex-row"),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "font-poppins font-medium text-[18px] leading-[23.4px]",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-gradient",
                                children: "Get"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                            src: arrow_up,
                            alt: "arrow-up",
                            className: "w-[23px] h-[23px] object-contain"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "font-poppins font-medium text-[18px] leading-[23.4px]",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-gradient",
                        children: "Started"
                    })
                })
            ]
        })
    });
/* harmony default export */ var components_GetStarted = (GetStarted);

;// CONCATENATED MODULE: ./components/Hero.tsx





const Hero = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        id: "home",
        className: "flex md:flex-row flex-col ".concat(style.paddingY),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex-1 ".concat(style.flexStart, " flex-col xl:px-0 sm:px-16 px-6"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-row justify-between items-center w-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                className: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]",
                                children: [
                                    "Mina is building the ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                        className: "sm:block hidden"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-gradient",
                                        children: "Privacy"
                                    }),
                                    " and"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "ss:flex hidden md:mr-4 mr-0",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_GetStarted, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                        className: "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-gradient",
                                children: "Security"
                            }),
                            " layer ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                className: "sm:block hidden"
                            }),
                            "for web3."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "".concat(style.paragraph, " max-w-[470px] mt-5 text-gradient"),
                        children: "We are the world’s lightest blockchain, powered by participants. Using zero knowledge technology, Mina is creating the infrastructure for the secure, democratic future we all deserve."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex-1 flex ".concat(style.flexCenter, " md:my-0 my-10 relative"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                        src: robot,
                        alt: "billing",
                        className: "w-[100%] h-[100%] relative z-[5]"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "ss:hidden ".concat(style.flexCenter),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_GetStarted, {})
            })
        ]
    });
};
/* harmony default export */ var components_Hero = (Hero);

;// CONCATENATED MODULE: ./components/index.ts




// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./components/Button.tsx


const Button = (props)=>{
    const { title , styles , onClick  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        onClick: onClick,
        className: "py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ".concat(styles),
        children: title
    });
};
/* harmony default export */ var components_Button = (Button);

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(2920);
// EXTERNAL MODULE: ./pages/reactCOIServiceWorker.tsx
var reactCOIServiceWorker = __webpack_require__(9639);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(4213);
// EXTERNAL MODULE: ./node_modules/snarkyjs/dist/web/index.js
var web = __webpack_require__(6400);
;// CONCATENATED MODULE: ./pages/zkappWorkerClient.ts

class ZkappWorkerClient {
    // ---------------------------------------------------------------------------------------
    loadSnarkyJS() {
        return this._call("loadSnarkyJS", {});
    }
    setActiveInstanceToBerkeley() {
        return this._call("setActiveInstanceToBerkeley", {});
    }
    loadContract() {
        return this._call("loadContract", {});
    }
    compileContract() {
        return this._call("compileContract", {});
    }
    fetchAccount(param) {
        let { publicKey  } = param;
        const result = this._call("fetchAccount", {
            publicKey58: publicKey.toBase58()
        });
        return result;
    }
    initZkappInstance(publicKey) {
        return this._call("initZkappInstance", {
            publicKey58: publicKey.toBase58()
        });
    }
    async getNum() {
        const result = await this._call("getNum", {});
        return web/* Field.fromJSON */.gN.fromJSON(JSON.parse(result));
    }
    createUpdateTransaction() {
        return this._call("createUpdateTransaction", {});
    }
    proveUpdateTransaction() {
        return this._call("proveUpdateTransaction", {});
    }
    async getTransactionJSON() {
        const result = await this._call("getTransactionJSON", {});
        return result;
    }
    _call(fn, args) {
        return new Promise((resolve, reject)=>{
            this.promises[this.nextId] = {
                resolve,
                reject
            };
            const message = {
                id: this.nextId,
                fn,
                args
            };
            this.worker.postMessage(message);
            this.nextId++;
        });
    }
    constructor(){
        this.worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(812), __webpack_require__.b)));
        this.promises = {};
        this.nextId = 0;
        this.worker.onmessage = (event)=>{
            this.promises[event.data.id].resolve(event.data.data);
            delete this.promises[event.data.id];
        };
    }
}


;// CONCATENATED MODULE: ./pages/index.page.tsx












function Home() {
    let [state, setState] = (0,react.useState)({
        zkappWorkerClient: null,
        hasWallet: null,
        hasBeenSetup: false,
        accountExists: false,
        currentNum: null,
        publicKey: null,
        zkappPublicKey: null,
        creatingTransaction: false
    });
    const [toggle, setToggle] = (0,react.useState)(false);
    // -------------------------------------------------------
    // Wait for account to exist, if it didn't
    // -------------------------------------------------------
    // connect wallet account to exist, if it didn't
    const connectWallet = async ()=>{
        if (!state.hasBeenSetup) {
            const zkappWorkerClient = new ZkappWorkerClient();
            await react_toastify_esm/* toast.promise */.Am.promise(zkappWorkerClient.loadSnarkyJS(), {
                pending: "Setting up SnarkyJS...",
                success: "Snarky JS is Ready"
            });
            await zkappWorkerClient.setActiveInstanceToBerkeley();
            const mina = window.mina;
            if (mina == null) {
                setState({
                    ...state,
                    hasWallet: false
                });
                return;
            }
            const publicKeyBase58 = (await mina.requestAccounts())[0];
            const publicKey = web/* PublicKey.fromBase58 */.nh.fromBase58(publicKeyBase58);
            console.log("using key", publicKey.toBase58());
            console.log("checking if account exists...");
            const res = await react_toastify_esm/* toast.promise */.Am.promise(zkappWorkerClient.fetchAccount({
                publicKey: publicKey
            }), {
                pending: "Checking if account exists"
            });
            const accountExists = res.error == null;
            await zkappWorkerClient.loadContract();
            await react_toastify_esm/* toast.promise */.Am.promise(zkappWorkerClient.compileContract(), {
                pending: "Checking if account have a balance"
            });
            const zkappPublicKey = web/* PublicKey.fromBase58 */.nh.fromBase58("B62qrDe16LotjQhPRMwG12xZ8Yf5ES8ehNzZ25toJV28tE9FmeGq23A");
            await zkappWorkerClient.initZkappInstance(zkappPublicKey);
            console.log("getting zkApp state...");
            await zkappWorkerClient.fetchAccount({
                publicKey: zkappPublicKey
            });
            setState({
                ...state,
                zkappWorkerClient,
                hasWallet: true,
                hasBeenSetup: true,
                publicKey,
                zkappPublicKey,
                accountExists
            });
        }
    };
    let transactionFee = 0.1;
    // -------------------------------------------------------
    // Send a transaction
    const onSendTransaction = async ()=>{
        setState({
            ...state,
            creatingTransaction: true
        });
        console.log("sending a transaction...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.publicKey
        });
        await state.zkappWorkerClient.createUpdateTransaction();
        console.log("creating proof...");
        await state.zkappWorkerClient.proveUpdateTransaction();
        console.log("getting Transaction JSON...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        console.log("requesting send transaction...");
        const { hash  } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        console.log("See transaction at https://berkeley.minaexplorer.com/transaction/" + hash);
        setState({
            ...state,
            creatingTransaction: false
        });
    };
    // -------------------------------------------------------
    // Refresh the current state
    const onRefreshCurrentNum = async ()=>{
        console.log("getting zkApp state...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        const currentNum = await state.zkappWorkerClient.getNum();
        console.log("current state:", currentNum.toString());
        setState({
            ...state,
            currentNum
        });
    };
    // -------------------------------------------------------
    // Create UI elements
    let hasWallet;
    if (state.hasWallet != null && !state.hasWallet) {
        const auroLink = "https://www.aurowallet.com/";
        const auroLinkElem = /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: auroLink,
            target: "_blank",
            rel: "noreferrer",
            className: "text-blue-600",
            children: "here"
        });
        hasWallet = /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "fixed inset-0 z-10 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "fixed inset-0 w-full h-full bg-black opacity-40"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center min-h-screen px-4 py-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "relative w-full max-w-lg p-4 mx-auto bg-primary rounded-md shadow-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-3 sm:flex flex-col justify-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center justify-center flex-none w-24 h-24 mx-auto",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                            src: auro,
                                            className: "w-[64px] h-[64px]",
                                            alt: "Alva",
                                            title: "Alva"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mt-2 text-center sm:ml-4 sm:text-left",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                className: "text-lg font-semibold text-white w-full",
                                                children: "Could not find a wallet"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "mt-2 text-[15px] text-center leading-relaxed text-gray-500",
                                                children: [
                                                    "Install Auro wallet ",
                                                    auroLinkElem
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        });
    // hasWallet =  <div> Could not find a wallet. Install Auro wallet here: {auroLinkElem}</div>;
    }
    let accountDoesNotExist;
    if (state.hasBeenSetup && state.hasWallet && !state.accountExists) {
        const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey.toBase58();
        accountDoesNotExist = /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "fixed inset-0 z-10 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "fixed inset-0 w-full h-full bg-black opacity-40"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center min-h-screen px-4 py-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "relative w-full max-w-lg p-4 mx-auto bg-primary rounded-md shadow-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-3 sm:flex",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center justify-center flex-none w-24 h-24 mx-auto ",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-64 h-64 text-red-600",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mt-2 text-center sm:ml-4 sm:text-left",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                className: "text-lg font-semibold text-white w-full",
                                                children: "Account does not have balance. "
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "mt-2 text-[15px] leading-relaxed text-gray-500",
                                                children: [
                                                    "Please visit the faucet to fund this account",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        href: faucetLink,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "text-blue-600",
                                                        children: "here"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        });
    }
    let mainContent;
    if (state.hasBeenSetup && state.accountExists) {
        mainContent = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    onClick: onSendTransaction,
                    disabled: state.creatingTransaction,
                    children: [
                        " ",
                        "Send Transaction",
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onRefreshCurrentNum,
                    children: " Get Latest State "
                })
            ]
        });
    } else {
        mainContent = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                children: "Connect Wallet"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-primary w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "".concat(style.paddingX, " ").concat(style.flexCenter),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "".concat(style.boxWidth),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                        className: "w-full flex py-6 justify-between items-center navbar",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                className: "list-none sm:flex hidden justify-end items-center flex-1",
                                children: !state.accountExists ? /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Button, {
                                    title: "Connect Wallet",
                                    onClick: connectWallet
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-primary font-poppins bg-blue-gradient truncate text-ellipsis w-24 rounded-sm",
                                    children: state.publicKey.toBase58()
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "sm:hidden flex flex-1 justify-end items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                                        src: toggle ? assets_close : menu,
                                        alt: "menu",
                                        className: "w-[28px] h-[28px] object-contain",
                                        onClick: ()=>setToggle(!toggle)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "".concat(!toggle ? "hidden" : "flex", " p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar"),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                            className: "list-none flex justify-end items-start flex-1 flex-col",
                                            children: !state.accountExists ? /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Button, {
                                                title: "Connect Wallet",
                                                onClick: connectWallet
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-primary font-poppins bg-blue-gradient truncate text-ellipsis w-24 rounded-sm",
                                                children: state.publicKey.toBase58()
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_toastify_esm/* ToastContainer */.Ix, {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                newestOnTop: false,
                                closeOnClick: true,
                                rtl: false,
                                pauseOnFocusLoss: false,
                                draggable: true,
                                pauseOnHover: false,
                                theme: "dark"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "bg-primary ".concat(style.flexStart),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "".concat(style.boxWidth),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Hero, {}),
                        hasWallet,
                        accountDoesNotExist
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "bg-primary ".concat(style.paddingX, " ").concat(style.flexCenter),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "".concat(style.boxWidth),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Stats, {})
                })
            })
        ]
    });
}


/***/ }),

/***/ 9639:
/***/ (function() {

function loadCOIServiceWorker() {
    if ( true && window.location.hostname != "localhost") {
        const coi = window.document.createElement("script");
        coi.setAttribute("src", "/04-zkapp-browser-ui/coi-serviceworker.min.js"); // update if your repo name changes for npm run deploy to work successfully
        window.document.head.appendChild(coi);
    }
}
loadCOIServiceWorker();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,423,774,888,179], function() { return __webpack_exec__(9208); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);