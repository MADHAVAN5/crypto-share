import React, { useEffect, useState} from "react";
import { ethers } from 'ethers';

import { contractAPI, connectAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.provider.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const TransactionContract = new ethers.Contract(connectAddress, contractAPI, signer);

    console.log({
        provider,
        signer,
        TransactionContract
    });
}

export const TransactionProvider = ( { children } ) => {
    // const [ConnectedAccount, setConnectedAccount] = useState(initialState);

    const checkIfwalletIsConnected = async () => {
        if(!ethereum) return alert('Please install network');

        const accounts  = await ethereum.request({ method: 'eth_accounts'});

        console.log(accounts);
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please install network');
            const accounts  = await ethereum.request({ method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        } catch(error) {
            console.log(error);

            throw new Error("No ethereum object.")
        }
    }

    useEffect(() => {
        checkIfwalletIsConnected();
    }, []);

    return (
        <TransactionContext.Provider value={{connectWallet}}>
            {children}
        </TransactionContext.Provider>
    );
}