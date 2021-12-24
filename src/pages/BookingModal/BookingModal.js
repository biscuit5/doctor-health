import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useAuth from '../../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({openBooking,booking,handleCloseBooking,date,setBookingSuccess}) => {
	const {user}= useAuth();
	const{name,time,price} = booking;
	const initialInfo = {patientName:user.displayName, email:user.email , phone:''}
	const [bookingInfo,setBookingInfo]= useState(initialInfo);

	const handleOnBlur = e =>{
		const field = e.target.name ;
		const value = e.target.value;
		const newInfo = {...bookingInfo};
		newInfo[field]= value ;
		console.log(newInfo)
		setBookingInfo(newInfo);
	}

	const handleBookingSubmit = e =>{
		
		const appointment ={
			...bookingInfo,
			time,
			price,
			serviceName:name,
			date:date.toDateString()
		}
		
		fetch('http://localhost:5000/appointments',{
			method: 'POST',
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify(appointment)
		})
		.then(res =>res.json())
		.then(data =>{
			if(data.insertedId){
				setBookingSuccess(true)
				handleCloseBooking();
			}
		});

		

		e.preventDefault();
		
	}
	
	

	return (
		
		<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleCloseBooking}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit} >
			<TextField
			disabled
			sx={{width:'90%', m:1}}
          
          id="outlined-size-small"
          defaultValue={time}
          
        />
			<TextField
			sx={{width:'90%',m:1}}
          
          id="outlined-size-small"
		  name= "patientName"
		  onBlur={handleOnBlur}
          defaultValue= {user.displayName}
          
        />
			<TextField
			sx={{width:'90%',m:1}}
          
          id="outlined-size-small"
		  name="email"
		  onBlur={handleOnBlur}
          defaultValue= {user.email}
          
        />
			<TextField
			sx={{width:'90%',m:1}}
          
          id="outlined-size-small"
		  name="phone"
		  onBlur={handleOnBlur}
          defaultValue="phone number"
          
        />
			<TextField
			disabled
			sx={{width:'90%', m:1}}
          
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          
        />
		<Button type="submit" variant="contained">submit</Button>
			</form>
          </Box>
        </Fade>
      </Modal>
	);
};

export default BookingModal;