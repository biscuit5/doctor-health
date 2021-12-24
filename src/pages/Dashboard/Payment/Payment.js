import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51K6MurIXgc3NOVFdScGLi7GMT8rjxxR9zYy18JM9m0ktjz6F0fYE4L22JbLfp68LTOX75SeM0NryagqQzDm8MQXL00U40JPSOj')

const Payment = () => {
	
	const{appointmentId} = useParams();
	
	const [appointment,setAppointment]=useState({})
	useEffect(()=>{
		fetch(`http://localhost:5000/appointments/${appointmentId}`)
		.then(res =>res.json())
		.then(data =>setAppointment(data))
	},[appointmentId])
	return (
		<div>
			<h2>please payment now:{appointment.patientName} for {appointment.serviceName}</h2>
			<h4>{appointment.price}</h4>
			{appointment?.price && <Elements stripe={stripePromise}>
			<CheckOutForm
			
			 appointment ={appointment}
			/>
		</Elements>}
		</div>
	);
};

export default Payment;