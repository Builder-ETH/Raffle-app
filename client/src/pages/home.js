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
import Participate from './participate';
import {Link} from 'react-router-dom';


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
    const contractAddress = "0x282f26733a8e275f95c732ae677deda6de2e6e15"; // Add the contract address here or you can use dotenv package
    const contractABI = abi.abi; 
    const addRaffle = async () => {
        
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
                    <Link to="/participate">
                    <Button variant="contained" color='secondary'>Participate</Button>
                    </Link>
                </Stack>
           </MyComponent>
        </div>
    );
}

export default Home