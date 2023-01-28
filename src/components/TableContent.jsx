import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AccessTime, Clear, Done, } from '@mui/icons-material';
import { Chip, CircularProgress } from '@mui/material';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../api/firebase';




function TableContent() {

    const [loan, setloan] = React.useState(null)
    // const [docid, setdocid] = React.useState(null)

    React.useEffect(() => {
        async function fetchUserData() {


            const q = await query(collection(db, "users"), where("userdata.uid", "==", window.localStorage.getItem('uid')));
            // console.log(q);

            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                // here we are getting the user data and loan from it 
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data().Loan);
                setloan(doc.data().Loan)
                // setdocid(doc.id)
            });
        }
        fetchUserData()
    }, [])

    const status= {
        1: <Chip label="Approved" color='success' icon={<Done />} />,
        2: <Chip label="Pending" color='warning' icon={<AccessTime />} />,
        3: <Chip label="Rejected" color='error' icon={<Clear />} />
    }



    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, <Chip label="Approved" color='success' icon={<Done />} />),
    //     createData('Cupcake', 305, 3.7, 67, <Chip label="Pending" color='warning' icon={<AccessTime />} />),
    //     createData('Eclair', 262, 16.0, 24, <Chip label="Approved" color='success' icon={<Done />} />),
    //     createData('Cupca', 305, 3.7, 67, <Chip label="Pending" color='warning' icon={<AccessTime />} />),
    //     createData('Ice cream sandwich', 237, 9.0, 37, <Chip label="Approved" color='success' icon={<Done />} />),
    //     createData('Gingerbread', 356, 16.0, 49, <Chip label="Rejected" color='error' icon={<Clear />} />),
    // ];

    // function createData(name, amount, duration, interest, status) {
    //     return { name, amount, duration, interest, status };
    // }



    return (
        <TableContainer className='container' variant='elevation' component={Paper}>
            <Table sx={{ minWidth: 650, borderRadius: '20px' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Loan Type</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Duration</TableCell>
                        <TableCell align="right">Interest</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loan ? loan.map((row,key) => (
                        <TableRow
                            key={key}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.LoanType}
                            </TableCell>
                            <TableCell align="right">{row.LoanAmnt}</TableCell>
                            <TableCell align="right">{row.Duration}</TableCell>
                            <TableCell align="right">{row.Interest}%</TableCell>
                            <TableCell align="right">{status[row.Status]}</TableCell>
                        </TableRow>
                    )) : <TableRow>
                        <TableCell>
                            <CircularProgress />

                        </TableCell>

                    </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableContent