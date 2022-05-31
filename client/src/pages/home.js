import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack  from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import { flexbox, height, padding, styled } from '@mui/system';

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

    useEffect(() => {
        const line = 'The most secure way of organizing raffles';
        setTimeout(() => {
            setTagline(line);
        }, 1000)
    }, [tagline]);


    return (<MyComponent>
                <Typography variant="h1" > Raffle App</Typography>
                <Typography variant="h5" color={'gray'}>{tagline}</Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color='secondary'>Add Raffle</Button>
                    <Button variant="contained" color='secondary'>Participate</Button>
                </Stack>
           </MyComponent>
    );
}

export default Home