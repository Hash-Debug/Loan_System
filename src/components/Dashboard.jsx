import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import { Chip, Typography, ListItemButton, List, ListItemIcon, ListItem, ListItemText, Grid, CircularProgress } from '@mui/material';
import { AccessTime, AccountBalance, AlternateEmail, Clear, Done, Person, PhoneAndroid } from '@mui/icons-material';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../api/firebase';
import AddLoan from './AddLoan';




function createData(name, amount, duration, interest, status) {
  return { name, amount, duration, interest, status };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, <Chip label="Approved" color='success' icon={<Done />} />),
  createData('Cupcake', 305, 3.7, 67, <Chip label="Pending" color='warning' icon={<AccessTime />} />),
  createData('Eclair', 262, 16.0, 24, <Chip label="Approved" color='success' icon={<Done />} />),
  createData('Cupca', 305, 3.7, 67, <Chip label="Pending" color='warning' icon={<AccessTime />} />),
  createData('Ice cream sandwich', 237, 9.0, 37, <Chip label="Approved" color='success' icon={<Done />} />),
  createData('Gingerbread', 356, 16.0, 49, <Chip label="Rejected" color='error' icon={<Clear />} />),
];



export default function Dashboard() {

  const [user, setuser] = React.useState(null)
  const [docid, setdocid] = React.useState(null)

  // const [uid, setuid] = React.useState(null)



  React.useEffect(() => {
    async function fetchUserData() {
      


      const q = await query(collection(db, "users"), where("userdata.uid", "==", window.localStorage.getItem('uid')));
      // console.log(q);

      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setuser(doc.data().userdata)
        setdocid(doc.id)
      });
    }
    fetchUserData()
  }, [])
  // console.log();


  return (
    <div style={{ padding: '20px' }}>
      <AddLoan docid={docid} />
     
      <Typography align='center' variant='h2'>Dashboard</Typography>
      <br></br>

      <Grid container justifyContent="space-around" alignItems="stretch">
        <Grid item xs={3}>


          <List

            sx={{ width: '100%', maxWidth: 360, bgcolor: '#242B2E', color: 'white', borderRadius: '24px' }}
            aria-label="contacts"
          >
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <Person color='primary' />
                </ListItemIcon>
                <ListItemText primary={user ? user.name : <CircularProgress />} />
              </ListItemButton>
            </ListItem>

            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <PhoneAndroid color='primary' />
                </ListItemIcon>
                <ListItemText primary={user ? user.phone : <CircularProgress />} />
              </ListItemButton>
            </ListItem>

          </List>
        </Grid>
        <Grid item xs={3} >
          <List

            sx={{ width: '100%', maxWidth: 360, bgcolor: '#242B2E', color: 'white', borderRadius: '24px' }}
            aria-label="contacts"
          >
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <AlternateEmail color='primary' />
                </ListItemIcon>
                <ListItemText primary={user ? user.email : <CircularProgress />} />
              </ListItemButton>
            </ListItem>

            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalance color='primary' />
                </ListItemIcon>
                <ListItemText primary={user ? user.accountNo : <CircularProgress />} />
              </ListItemButton>
            </ListItem>

          </List>
        </Grid>
      </Grid>
      <br />

      <TableContainer className='container' variant='elevation' component={Paper}>
        <Table sx={{ minWidth: 650, borderRadius: '20px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Loan Name</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Duration</TableCell>
              <TableCell align="right">Interest</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">{row.interest}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
