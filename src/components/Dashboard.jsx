import * as React from 'react';

import { Typography, ListItemButton, List, ListItemIcon, ListItem, ListItemText, Grid, CircularProgress } from '@mui/material';
import { AccountBalance, AlternateEmail, Person, PhoneAndroid } from '@mui/icons-material';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../api/firebase';
import AddLoan from './AddLoan';
import Table from './TableContent';



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
      <Table/>

    </div>
  );
}
