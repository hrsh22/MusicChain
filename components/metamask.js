import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import Image from "next/image";
const MetaMask = () => {

  const [currentAccount, setCurrentAccount] = useState("");
  const [connect, setConnect] = useState(false);
  const [balance, setBalance] = useState("");

  const failMessage = "Please install MetaMask & connect your wallet"; 
  const successMessage = "Your Account is successfully connected to MetaMask";

  const INFURA_ID = "1a81d80bb2f245c9a672425f7f411fe4";
  const provider = new ethers.providers.JsonRpcProvider( `https://mainnet.infura.io/v3/${INFURA_ID}`

    ); 

   

    const checkIfWalletConnected = async () => { 
        if (currentAccount!=undefined){
            if (!window.ethereum) return;

            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            if (accounts.length) {
                const account = accounts[0];
                setCurrentAccount(account);
                // console.log("currentAccount", account);
                const balance = await provider.getBalance('0x5CC945E9463E644FFBb28b93ea986aAD6e94D8Bf');
                setBalance(ethers.utils.formatEther(balance)+' ETH');
            } else {
            }
        }
    }
    // console.log(accounts);
    const CWallet = async () => {
        // setCurrentAccount('')
        
        if (typeof window.ethereum !== 'undefined') {
            checkIfWalletConnected();
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setCurrentAccount (accounts[0]);
            // window.location.reload();    
            return console.log('MetaMask Connected!');
        }
        else{
            console.log(failMessage);
        }
        
        
    };

    const Dwallet = async () => {
        setBalance(undefined);
        setCurrentAccount(undefined);
    };
            
    // useEffect (() => {
    //     if (currentAccount!=undefined){
    //         checkIfWalletConnected();
    //     }
    // });
        
    useEffect(() => {
        CWallet()
        if (typeof window.ethereum !== 'undefined') {
            async function accountChanged() {       
                window.ethereum.on("accountsChanged", async function () { 
                    const accounts = await window.ethereum.request({ 
                        method: "eth_accounts",
                    });
                    
                    if (accounts.length) { 
                        setCurrentAccount (accounts[0]);
                    } else {
                    window.location.reload();
                    }
                    
                });
            }
            accountChanged();
        }
    }, []);

    return (

        

        <>
        {currentAccount=='' ? (
                <a
                className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 cursor-pointer" onClick={CWallet}
              >
                <i></i> Connect Wallet
              </a>
            ): (
                <div
                className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              >
                <i className="fas fa-user-shield"></i> {currentAccount.substring(0, 7)+'......'+currentAccount.substring(36, 42)}
              </div>
            )}
        


            {/* {!currentAccount ? "Please connect your wallet" : currentAccount } */}
            {/* <Image src={creator} alt="profile" width={80} height={80} />  */}
            
            {/* {!currentAccount ? (
            <div> 
                <div className="message">
                    <p style={{color:'red'}}>{failMessage}</p>
                </div>
            </div>
            ): (
            <div>
                <h6>Verified<span className="tick">&#10004;</span></h6>
                <p>Ether account and balance Checker <br /> find account details</p>
                <div className="buttons">
                    <button className="primary ghost" onClick={() => {}}>Ether Account Details</button>
                    
                    <button className="primary" onClick={Dwallet}>Disconnect Wallet</button>
                </div>
            </div>
            )}
            {!currentAccount ? (
                <div className="buttons">
                    <button className="primary" onClick={CWallet}>Connect Wallet</button>
                </div>
            ): (
                <div className="buttons">
                    <ul>
                        <li>Account</li>
                        <li>{currentAccount}</li>
                        <li>Balance</li>
                        <li>{balance}</li>
                    </ul>
                </div>
            )} */}

        </>
    );
};

export default MetaMask;