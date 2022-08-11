import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const MuiButton = () => {

  const [clicked, setClicked] = useState(0)

  const handleClick = (e) => { 
    setClicked(prevState => prevState+1)
  }

  return (
    <div style={ {margin:'20px'} }>
      <Typography variant='h5' gutterBottom> 1. Button Types</Typography>
      <Button variant='text' sx={ {m:2} }> Text</Button>
      <Button variant='contained' sx={ {m:2} }> Contained</Button>
      <Button variant='outlined' sx={ {m:2} }> Outlined</Button>

      <Typography variant='h5' gutterBottom> 2. Button colors </Typography>
      <Button variant='contained' sx={ {m:2} } color="primary"> Primary</Button>
      <Button variant='contained' sx={ {m:2} } color="secondary"> Secondary</Button>
      <Button variant='contained' sx={ { m: 2 } } color="info"> Info</Button>
      <Button variant='contained' sx={ {m:2} } color="warning"> Warning</Button>
      <Button variant='contained' sx={ {m:2} } color="success"> Success</Button>
      <Button variant='contained' sx={ { m: 2 } } color="error"> Error</Button>
      
      <Typography variant="h5"> 3. Button Sizes</Typography>
      <Button variant='contained' sx={ {m:2} } size="small"> Small</Button>
      <Button variant='contained' sx={ {m:2} } size="medium"> Medium</Button>
      <Button variant='contained' sx={ { m: 2 } } size="large"> Large</Button>
      
      <Typography variant="h5"> 4. Handle Clicks</Typography>
      <Button variant='contained' sx={ { m: 2 } } onClick={ handleClick }> click me </Button>
      <Typography variant="body1"> You clicked Me { clicked } times !</Typography>
      
      <Typography variant="h5"> 5. Other Button Props</Typography>
      <Button variant='contained' disableElevation sx={ { m: 2 } } > Disabled Elevation </Button>
      <Button variant='contained' disableRipple sx={ { m: 2 } }> Disabled Ripple </Button>
      
    </div>
  )
}

export default MuiButton