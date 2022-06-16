import React from "react";
import { grid, styled } from "@mui/system";
import RaffleCard from "../components/raffleCard";
import { Typography } from '@mui/material';
import ConnectWallet from '../components/connectWallet';

const PartipateWrapper = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
});

const RafflesHeadingWrapper = styled('div')({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:100,
    gap:20
});


const Participate = () => {

    return (
        <>
        <ConnectWallet />
        <RafflesHeadingWrapper>
            <Typography variant="h2"> Ongoing Raffle Events </Typography> 
        </RafflesHeadingWrapper>
        <PartipateWrapper>
            <RaffleCard 
            name={"CityDao"} 
            description={"Build blockchain city"}/>
            
            <RaffleCard 
            name={"Snapshot"} 
            description={"Make snapshot voting easier"}/>
            
            <RaffleCard 
            name={"PrimeDao"} 
            description={"Build dao relation tools"}/>
            
            <RaffleCard 
            name={"IndexCoop"} 
            description={"asset management company for tokens"}/>
            
            <RaffleCard 
            name={"BankLess"} 
            description={"make the world bankless"}/>
            <RaffleCard 
            name={"CityDao"} 
            description={"Build blockchain city"}/>
            
        </PartipateWrapper>  
        </> 
    );
}

export default Participate