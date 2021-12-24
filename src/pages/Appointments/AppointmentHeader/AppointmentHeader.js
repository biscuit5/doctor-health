import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../../Sheared/Calender/Calender';


const AppointmentHeader = ({date,setDate}) => {
	

	return (
		<Container>
			<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
			<Typography variant="h4">
				Appointment
			</Typography>
			<Calender date={date} setDate={setDate}></Calender>
        	</Grid>
			<Grid item xs={12} md={6}>
				<img style={{width:'100%'}} src={chair} alt="" />
        	</Grid>
			</Grid>
		</Container>
	);
};

export default AppointmentHeader;