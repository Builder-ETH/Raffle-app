import React from 'react';
import { ethers } from 'ethers'; 
import {styled} from '@mui/system';
import { Typography } from '@mui/material';

const RafflesHeadingWrapper = styled('div')({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:500,
    gap:20
});

const Raffles = () => { 
    
    return (
        <div>
        <RafflesHeadingWrapper>
          <Typography variant="h2"> Ongoing Raffle Events </Typography> 
        </RafflesHeadingWrapper>
        </div>
    );
}
export default Raffles;
