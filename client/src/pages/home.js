import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Stack  from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import { flexbox, height, padding, styled } from '@mui/system';
import { ethers } from 'ethers'; 
import { EtherscanProvider } from '@ethersproject/providers'; 
import abi from "../contracts/RaffleOrganizer.json";
import ConnectWallet from '../components/connectWallet';


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
    const contractAddress = ""; // Add the contract address here or you can use dotenv package
    const contractABI = abi.abi; 
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
    // render it with effects
    useEffect(() => {
        const line = 'The most secure way of organizing raffles';
        setTagline(line);
    }, [tagline]);


    return (
        <div>
            <ConnectWallet/>
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