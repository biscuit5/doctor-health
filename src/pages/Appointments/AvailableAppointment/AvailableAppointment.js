import { Container, Grid, Typography,Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../../Booking/Booking';
const bookings =[
	{
		id:1,
		name:'Teeth orthodontics',
		time: '8:00 am - 9:00am',
		price:23,
		spaces: '10 spaces available'
	},
	{
		id:2,
		name:'cosmetic dentistry',
		time: '8:00 am - 9:00am',
		price:24,
		spaces: '10 spaces available'
	},
	{
		id:3,
		name:'teeth cleaning',
		time: '9:00 am - 10:00am',
		price:45,
		spaces: '10 spaces available'
	},
	{
		id:4,
		name:'Teeth orthodontics',
		time: '7:00 am - 7:00am',
		price:34,
		spaces: '10 spaces available'
	},
	{
		id:5,
		name:'teeth orthdontics',
		time: '9:00 am - 9:00am',
		price:65,
		spaces: '10 spaces available'
	},
	{
		id:6,
		name:'Teeth orthodontics',
		time: '8:00 am - 9:00am',
		price:34,
		spaces: '10 spaces available'
	},
	{
		id:7,
		name:'Teeth orthodontics',
		time: '8:00 am - 9:00am',
		price: 63,
		spaces: '10 spaces available'
	},
	{
		id:8,
		name:'Teeth orthodontics',
		time: '8:00 am - 9:00am',
		price:23,
		spaces: '10 spaces available'
	},
	{
		id:9,
		name:'Teeth orthodontics',
		time: '8:00 am - 9:00am',
		price:12,
		spaces: '10 spaces available'
	}
]

const AvailableAppointment = ({date}) => {
	const [bookingSuccess,setBookingSuccess] = useState(false)
	
	return (
		<Container>
			
			<Typography sx={{color:'secondary.min',mt:5, mb:'4'}} variant="h4">appointment available now {date.toDateString()}</Typography>
			{bookingSuccess && <Alert severity="success">appointment is a success alert — check it out!</Alert>}
			<Grid items container spacing ={3}>
			{
				bookings.map(booking => <Booking
				key={booking.id}
				booking={booking}
				date ={date}
				setBookingSuccess={setBookingSuccess}
				></Booking>)
			}
			</Grid>
		</Container>
		
	);
};

export default AvailableAppointment;