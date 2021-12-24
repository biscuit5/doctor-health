import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/bg.png'
import Button from '@mui/material/Button';
import { fontSize, margin } from '@mui/system';
import { Container } from '@mui/material';

const AppointmentBannerBg ={
	background:`url(${bg})`,
	backgroundColor: 'rgb(54, 59, 106)',
	backgroundBlendMode: 'darken, luminosity',
	marginTop : 150,
	margin:'20px'
}
const AppointmentBanner = () => {
	return (
		<Box style={AppointmentBannerBg} sx={{ flexGrow: 1 }}>
		<Container>
		<Grid container spacing={2}>
		  <Grid item xs={12} md={6} >
		  <img style={{width:'70%',height:'450px',marginTop:'-115px'}} src={doctor} alt="" />
		  </Grid>
		  <Grid item xs={4} md={6} style={{display:'flex',justifyContent:'flex-start',textAlign:'left',alignItems:'center'}} >
		 	<Box>
			 <Typography variant="h5" gutterBottom component="div">
			Appointment
      	</Typography>
		  <Typography style={{color:'white', fontWeight:'400', fontSize:'14', my:'y'}} variant="h4" gutterBottom component="div">
			 Make Appointment AN Today
      	</Typography>
		  <Typography style={{color:'white',fontWeight:'300'}} variant="h6" gutterBottom component="div">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio suscipit corrupti aperiam sequi perspiciatis quas mollitia deserunt ipsa quaerat ea.
      	</Typography>
		  <Button variant="contained">learn more</Button>
			 </Box>
		  </Grid>
		  
		</Grid>
		</Container>
	  </Box>
	);
};

export default AppointmentBanner;