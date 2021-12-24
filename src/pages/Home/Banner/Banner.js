import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
	background :`url(${bg})`,


}
const verticalCenter={
	display:'flex',
	alignItems :'center',
	height: 400
}

const Banner = () => {
	return (
		<Container style={bannerBg} sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
			<Grid item xs={12} md={6} sx={{...verticalCenter,textAlign:'left'}}>
				<Box>
				<Typography variant="h3">
					Your New Smile <br />
					stats here
				</Typography>
				<Typography variant="h6" sx={{my:4 }} >
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sunt voluptatibus provident velit laboriosam ab!
				</Typography>
				<Button variant="contained"> get appointment</Button>
				</Box>
			</Grid>
			<Grid style={verticalCenter} item xs={12} md={6}>
				<img style={{width:'400px'}}  src={chair} alt="" />
			</Grid>
		
			</Grid>
	  	</Container>
	);
};

export default Banner;