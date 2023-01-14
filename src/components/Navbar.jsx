import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link style={{textDecoration:"none", color:'azure'}} to='/'>
                        Loan App
                    </Link>
                    </Typography>
                    <Link style={{textDecoration:"none"}} to='/signin'>
                        <Button variant='contained' type='button' color='secondary' >Sign in</Button> 
                    </Link>
                        <p> &nbsp;</p>
                    <Link style={{textDecoration:"none"}} to='/signup'>
                    <Button variant='contained' type='button' color='secondary' >Sign up</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar