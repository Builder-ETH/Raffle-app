import React, { useState } from "react";
import { borderColor, color, styled, width } from "@mui/system";
import { convertLength } from "@mui/material/styles/cssUtils";

const Wrapper = styled('div')({
    height: 350,
    width: 300,
    padding: 70
});

const Card = styled('div')({
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    padding: 20 
});

const Content = styled('div')({
    marginTop: 20
});


const RaffleCard = ({
    name,
    description
}) => {

    return (
        <Wrapper>
            <Card>
                <div>
                    <img src="#"></img>
                </div>
                <Content>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </Content>
                <div>
                    <span>action1</span>
                    <span>action2</span>
                </div>
            </Card>
        </Wrapper>
    )
}

export default RaffleCard;