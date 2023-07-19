import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import {Collections} from '@mui/icons-material'

function Navbar() {
  return (
    <AppBar position='static'>
        <Toolbar>
          <Collections />
              <Typography variant='h5'>Image Finder</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;