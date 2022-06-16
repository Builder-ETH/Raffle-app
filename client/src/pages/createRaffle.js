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
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const defaultValues = {
    name: "",
    description: "",
};
const contractAddress = "";  // add contract address
const contractABI = abi.abi; 


const CreateRaffle = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formValues);
      let name = formValues.name; 
      let description = formValues.description; 
      try {
        const {ethereum} = window; 
  
        if(ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum); 
          const signer = provider.getSigner(); 
          const raffleOrganiser = new ethers.Contract(contractAddress, contractABI, signer); 
          const txn = await raffleOrganiser.addRaffle(name,description);
          await txn.wait(); 
          setFormValues({
            name:"",
            description:"", 
          });
        } else {
          console.log("I believe user still haven't installed metamask");
        }
      } catch (error) {
        console.log(error); 
      }
      
    };
    return(
        <div>
           <h1 align="center">create raffle page</h1>
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
              <Grid item>
                <TextField
                  id="name-input"
                  name="name"
                  label="Name"
                  type="text"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="descripton-input"
                  name="description"
                  label="Description"
                  type="text"
                  value={formValues.description}
                  onChange={handleInputChange}
                />
              </Grid>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </div>
    )
}

export default CreateRaffle