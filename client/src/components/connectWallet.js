import React, { useEffect, useMemo, useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import { ethers } from "ethers";
import { EtherscanProvider } from "@ethersproject/providers";

const ConnectWallet = () => {

    const [address, setAddress] = useState('');
    const [loginStatus, setloginStatus] = useState(false);

    const connectWallet = async () => {
        try{
            const {ethereum} = window; 

            if(!ethereum) {
                alert("Install Metamask dummy"); // ToDo: Use modal and give better message
                return ; 
            }
            const accounts = await ethereum.request({method: "eth_requestAccounts"}); 
            console.log("connected",accounts[0]); 
            setAddress(accounts[0]); 
            setloginStatus(true);
        } catch (error) {
            console.log(error);
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window; // metamask injects ethereum object into window
            if(!ethereum) {
                alert("There is no metamask wallet");
            }

            const accounts = await ethereum.request({method: "eth_accounts"}); 
            console.log(accounts);
            if(accounts.length !== 0) {
                const account = accounts[0]; 
                setAddress(account); 
                setloginStatus(true);
            } else {
                connectWallet();
            }
        } catch (error) {
            alert("Something went wrong");
            console.log(error);
        }
    }

    const shorterAddress =  useMemo(() => {
        if(address.length < 12) {
            return address;
        }

        return `${address.substring(0,6)}...${address.substring(address.length - 4)}`

    }, [address])

    useEffect(() => {
        checkIfWalletIsConnected();   
    }, [address])

   
    return (
        <>
        <Grid container justifyContent='right' padding='10px 10px 10px 10px'>
        {!loginStatus && (
            <Button variant="contained" color='secondary' align='right' onClick={connectWallet}> Connect Wallet </Button>)}
        {loginStatus && (
            <Button variant="outlined" color='secondary' align='right'>{shorterAddress}</Button>
        )}
        </Grid>
        </>
    )
}

export default ConnectWallet