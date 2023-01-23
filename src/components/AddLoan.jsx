import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControlLabel, FormLabel, Radio, RadioGroup, SpeedDial } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {  doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../api/firebase';



export default function AddLoan({docid}) {

    const [LoanAmnt, setLoanAmnt] = React.useState(null)
    const [LoanType, setLoanType] = React.useState(null)
    const [Income, setIncome] = React.useState(null)
    const [Cibil, setCibil] = React.useState(null)
    const [Employment, setEmployment] = React.useState(null)
    const [Duration, setDuration] = React.useState(null)



    const handleSubmit = async(e) => {
        e.preventDefault()
        const loanData = {
            LoanAmnt: LoanAmnt,
            LoanType: LoanType,
            Income: Income,
            Cibil: Cibil,
            Employment: Employment,
            Duration: Duration
        }
        console.log(loanData);

        const userRef= doc(db, "users", docid)
        console.log(userRef);
        let loans= (await getDoc(userRef)).data().Loan || []
        loans.push(loanData)
        updateDoc(userRef,{Loan : loans})
        // await setDoc(userRef,{
        //     Loans : [loanData]

        // },{ merge: true }).then(console.log("updated successfully"))
    }
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                onClick={handleClickOpen}
                sx={{ position: 'absolute', bottom: 16, right: 16, }}
                FabProps={{
                    sx: {
                        bgcolor: 'secondary.main',
                        '&:hover': {
                            bgcolor: 'secondary.main',
                        }
                    }
                }}
                icon={<Add />}
            />

            <Dialog open={open} onClose={handleClose} fullScreen={useMediaQuery(theme.breakpoints.down('xs'))}>

                <DialogTitle>Apply For Loan</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill in the following details to apply for new loan
                    </DialogContentText>
                    <Box component='form' onSubmit={handleSubmit}>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Loan Amount"
                            type="number"
                            fullWidth
                            variant="standard"
                            required
                            onChange={(e) => {
                                setLoanAmnt(e.target.value);
                            }}
                        />
                        <br /><br></br>
                        <FormLabel >Loan Type</FormLabel>
                        <RadioGroup

                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={(e) => {
                                setLoanType(e.target.value);
                            }}
                        >

                            <FormControlLabel
                                id="Home"
                                value="Home"
                                control={<Radio />}
                                label="Home"
                            />
                            <FormControlLabel
                                id="Personal"
                                value="Personal"
                                control={<Radio />}
                                label="Personal"
                            />
                            <FormControlLabel
                                id="Vehicle"
                                value="Vehicle"
                                control={<Radio />}
                                label="Vehicle"
                            />
                            <FormControlLabel
                                id="Education"
                                value="Education"
                                control={<Radio />}
                                label="Education"
                            />

                        </RadioGroup>
                        <TextField
                            required
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Income"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={(e) => {
                                setIncome(e.target.value);
                            }}
                        />
                        <TextField
                            required
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Cibil Score"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={(e) => {
                                setCibil(e.target.value);
                            }}
                        />
                        
                        <TextField
                            required
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Employment Type"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => {
                                setEmployment(e.target.value);
                            }}
                        />
                        <TextField
                            required
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Duration (In Months)"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={(e) => {
                                setDuration(e.target.value);
                            }}
                        />

                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit' >Apply</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}