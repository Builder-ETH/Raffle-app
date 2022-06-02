import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Stack  from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import { flexbox, height, padding, styled } from '@mui/system';
import { ethers } from 'ethers'; 
import { EtherscanProvider } from '@ethersproject/providers'; 
import abi from "../contracts/RaffleOrganizer.json";



const MyComponent = styled('div')({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:500,
    gap:20
});

const Home = () => {

    const [tagline, setTagline] = useState('');
    const [currentAccount, setCurrentAccount] = useState(''); 
    const contractAddress = "0x282f26733a8e275f95c732ae677deda6de2e6e15"; // Add the contract address here or you can use dotenv package
    const contractABI = abi.abi; 
    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window; // metamask injects ethereum object into window
            if(!ethereum) {
                console.log("There is no metamask wallet");
            }
            else {
                console.log("Got the ethereum object hurray"); 
            }
            const accounts = await ethereum.request({method: "eth_accounts"}); 
            if(accounts.length !== 0) {
                const account = accounts[0]; 
                console.log("Found an authorized account", account); 
                setCurrentAccount(account); 
            } else {
                console.log("No authorized account found"); 
            }
        } catch (error) {
            console.log(error);
        }
    }

    const connectWallet = async () => {
        try{
            const {ethereum} = window; 
            
            if(!ethereum) {
                alert("Install Metamask dummy"); // ToDo: Use modal and give better message
                return ; 
            }
            const accounts = await ethereum.request({method: "eth_requestAccounts"}); 
            console.log("connected",accounts[0]); 
            setCurrentAccount(accounts[0]); 
        } catch (error) {
            console.log(error);
        }
    }
    
    const addRaffle = async () => {
        try {
            const {ethereum} = window;
            if(ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum); 
                const signer = provider.getSigner(); 
                const raffleOrganiser = new ethers.Contract(contractAddress, contractABI); 
                 
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(()=> {
        checkIfWalletIsConnected();
    },[]);

    useEffect(() => {
        const line = 'The most secure way of organizing raffles';
        setTagline(line);
    }, [tagline]);


    return (
        <div>
            <Grid container justifyContent='right' padding='10px 10px 10px 10px'>
            <Button variant="contained" color='secondary' align='right' onClick={connectWallet}> Connect Wallet </Button>
            </Grid>
            <MyComponent>
                <Typography variant="h1" > Raffle App</Typography>
                <Typography variant="h5" color={'gray'}>{tagline}</Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color='secondary' onClick={addRaffle}>Add Raffle</Button>
                    <Button variant="contained" color='secondary'>Participate</Button>
                </Stack>
           </MyComponent>
        </div>
    );
}

export default Home