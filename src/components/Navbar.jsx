import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { auth } from '../api/firebase'



function Navbar({ user }) {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Link style={{ textDecoration: "none", color: 'azure' }} to='/'>
                            Loan App
                        </Link>
                    </Typography>

                    {
                        user ? <>
                            <Button variant='outlined' type='button' color='secondary' href='/dashboard' >Dashboard</Button>
                            <p> &nbsp;</p>

                            <Button variant='contained' type='button' color='secondary' onClick={() => { auth.signOut(); window.localStorage.removeItem('uid') ; window.location = "/" }} >Sign Out</Button>
                        </>
                            :
                            <>
                                <Link style={{ textDecoration: "none" }} to='/signin'>
                                    <Button variant='contained' type='button' color='secondary' >Sign in</Button>
                                </Link>
                                <p> &nbsp;</p>
                                <Link style={{ textDecoration: "none" }} to='/signup'>
                                    <Button variant='contained' type='button' color='secondary' >Sign up</Button>
                                </Link>
                            </>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar