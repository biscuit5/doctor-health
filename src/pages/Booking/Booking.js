import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking ,date,setBookingSuccess}) => {
	const [openBooking, setOpenBooking] = React.useState(false);
	const handleOpenBooking = () => setOpenBooking(true);
	const handleCloseBooking = () => setOpenBooking(false);
	const {name,time,spaces,price} = booking
	return (
		<>
		<Grid item xs={12} sm={6} md={4} >
		<Paper sx={{pb:5}} elevation={3} >
		<Typography sx={{color: 'primary.main'}} variant="h4" gutterBottom component="div">
        {name}
      </Typography>
		<Typography variant="h6" gutterBottom component="div">
        {time}
		
      </Typography>
	  <Typography variant="subtitle1" gutterBottom component="div">
       price {price }
      </Typography>
	  <Typography variant="subtitle1" gutterBottom component="div">
        {spaces}
      </Typography>
	  <Button onClick={handleOpenBooking} variant="contained" >booking</Button>
		</Paper>
		
	  </Grid>
		<BookingModal
		booking={booking}
		setBookingSuccess={setBookingSuccess}
		date={date}
		handleCloseBooking={handleCloseBooking}
		openBooking={openBooking}
		
		></BookingModal>
		</>

	);
};

export default Booking;