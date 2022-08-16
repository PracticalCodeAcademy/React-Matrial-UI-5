import React from 'react'
import { Button, ButtonGroup, Typography } from '@mui/material';


const MuiButtonGroup = () => {
  return (
		<>
			<Typography variant="h5">1. Variants </Typography>

			<ButtonGroup sx={{ m: 2 }} variant="outlined">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>
			<ButtonGroup sx={{ m: 2 }} variant="contained">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>
			<ButtonGroup sx={{ m: 2 }} variant="text">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>

			<Typography variant="h5"> 2. Orientation</Typography>
			<ButtonGroup sx={{ m: 2 }} variant="contained" orientation="vertical">
				<Button> Top</Button>
				<Button> Middle</Button>
				<Button> Bottom</Button>
			</ButtonGroup>

			<ButtonGroup sx={{ m: 2 }} variant="contained" orientation="horizontal">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>

			<Typography variant="h6"> 3. Sizes</Typography>
			<ButtonGroup sx={{ m: 2 }} variant="outlined" size="large">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>
			<ButtonGroup sx={{ m: 2 }} variant="outlined" size="medium">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>
			<ButtonGroup sx={{ m: 2 }} variant="outlined" size="small">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>

			<Typography variant="h6"> 4. Colors</Typography>
			<ButtonGroup sx={{ m: 2 }} variant="contained"  color="secondary">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>
			<ButtonGroup sx={{ m: 2 }} variant="contained" color="success">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>
			<ButtonGroup sx={{ m: 2 }} variant="contained" color="error">
				<Button> Left</Button>
				<Button> Center</Button>
				<Button> Right</Button>
			</ButtonGroup>
		</>
	);
}

export default MuiButtonGroup