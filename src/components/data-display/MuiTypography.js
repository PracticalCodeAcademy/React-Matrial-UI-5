import React from 'react';
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (

    <>
    
      <Typography variant='h1' align='center'> h1 Heading </Typography>
      <Typography variant='h2' color="red"> h2 Heading </Typography>
      <Typography variant='h3' color="primary"> h3 Heading </Typography>
      <Typography variant='h4' color="secondary"> h4 Heading </Typography>
      <Typography variant='h5' gutterBottom> h5 Heading </Typography>
      <Typography variant='h6' > h6 Heading </Typography>
      <Typography variant='subtitle1' > subtitle1 </Typography>
      <Typography variant='subtitle2' > subtitle2 </Typography>

      {/* 16px */}
      <Typography
        align="center"
        variant="body1"
        mt={ 3}
      >
        This is a body 1 text
      </Typography>

      {/* 14px */}
      <Typography
        align="center"
        variant="body2"
        p={ 2}
      >
        This is a body 2 text
      </Typography>
    </>
    
  )
}

export default MuiTypography