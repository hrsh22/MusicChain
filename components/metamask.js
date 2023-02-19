import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useArcanaAuth } from "../auth/useArcanaAuth";
import Image from "next/image";
import Loader from "./loader";
import { Info } from "./info";

export var currentAC = "";

const MetaMask = () => {
 
  const [currentAccount, setCurrentAccount] = useState("");
//   const [connect, setConnect] = useState(false);
  const [balance, setBalance] = useState("");

  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } =
    useArcanaAuth();
  const onConnectClick = async () => {
    try {
      await connect();
    } catch (e) {
      console.log(e);
    }
  };
  const onConnect = () => {
    console.log("connected");
  };
  React.useEffect(() => {
    provider.on("connect", onConnect);
    return () => {
      provider.removeListener("connect", onConnect);
    };
  }, [provider]);

    return (
        <>
        {/* {currentAccount=='' ? (
                <button
                className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 cursor-pointer" 
              >
                <i></i> Connect Wallet
              </button>
            ): (
                <div
                className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              >
                <i className="fas fa-user-shield"></i> {currentAccount.substring(0, 7)+'......'+currentAccount.substring(36, 42)}
              </div>
            )} */}
            {loading && <Loader secondaryColor="#101010" strokeColor="#101010" />}
      {!loading && !isLoggedIn && (
        <button className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 cursor-pointer" onClick={onConnectClick}>
          Connect
        </button>
      )}
      {!loading && isLoggedIn}
        </>
    );
};

export default MetaMask;