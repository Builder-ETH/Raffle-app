import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    TextField,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
const Container = styled.div`
    padding: 1rem;
`;
const StyledDialogTitle = styled(DialogTitle)`
    text-align: center;
`;
const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const StyledTextField = styled(TextField)``;
const ModalForm = () => {
    const [open, setOpen] = useState(true);
    const closeModel = (event, reason) => {
        // If You Went To Prevent Model Close On OutSide Click Of Model Than Uncomment Below Code
        // if (reason === 'backdropClick') {
        //     return
        // }
        setOpen(false);
    };
    const openModel = () => {
        setOpen(true);
    };
    return (
        <Container>
            <Button onClick={openModel} color="secondary" variant="contained">
                Open
            </Button>
            <Dialog open={open} fullWidth onClose={closeModel}>
                <StyledDialogTitle>
                    <FlexContainer>
                        <Typography variant="h6">Event Details</Typography>
                        <IconButton onClick={closeModel}>
                            <CloseIcon />
                        </IconButton>
                    </FlexContainer>
                </StyledDialogTitle>
                <DialogContent>
                    <form>
                        <Grid container spacing={3} direction="column">
                            <Grid item>
                                <StyledTextField
                                    fullWidth={true}
                                    id="username"
                                    label="Username"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <StyledTextField
                                    fullWidth={true}
                                    id="password"
                                    label="Password"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={openModel}
                                    color="primary"
                                    variant="contained"
                                >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </Container>
    );
};

export default ModalForm; 