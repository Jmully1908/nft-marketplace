import '../styles/globals.css'
import './app.css'
import Link from 'next/link'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import React, { useEffect } from "react";

function getLibrary(provider) {
  return new Web3(provider)
}



function KryptoBirdMarketplace({Component, pageProps}) {
  useEffect(() => {
    // Web3 Browswer Detection
    if (typeof window.ethereum !== "undefined") {
      console.log("Injected Web3 Wallet is installed!");
    }

    //Button ID
    const connectButton = document.getElementById("connect");

    //Click Event
    connectButton.addEventListener("click", () => {
      connectAccount();
    });

    //Connect Account Function
    async function connectAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      connectButton.innerHTML =
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        account[5] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
    }
  }, []);
  return (
    <div>
       
      <nav className='navbar'>
       
        <div className='flex mt-4 justify-center'>
        <Link href='/'>
            <a className='mr-6' style={{positionRelativeLeft:'-100'}}>
              Hyrogo
            </a>
          </Link>
          <Link href='/Home'>
            <a className='mr-6'>
              Browse
            </a>
          </Link>
         
          <Link href='/my-nfts'>
            <a className='mr-6'>
              My Collection
            </a>
          </Link>
          <Link href='/account-dashboard'>
            <a className='mr-6'>
              Dashboard
            </a>
          </Link>
          <Link href='/mint-item'>
            <a className='mr-6'>
              Mint Tokens
            </a>
          </Link>
          <button id="connect">
            <a className='connect'>
              Connect
            </a>
          </button>
          
           
          
          </div>
      </nav>
      <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
      
    </div>
  )
}

export default KryptoBirdMarketplace 
