import React from 'react'
import { Grid } from '@mui/material';
import Image from './Image';

function Images({data}) {
  return (
    <Grid container>
         {
            data.map(image => (
                <Grid xs={3} item>
                   <Image image={image} />
                </Grid>
            ))
         }
    </Grid>
  )
}

export default Images;