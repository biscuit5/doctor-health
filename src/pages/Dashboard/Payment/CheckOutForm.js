import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
const CheckOutForm = ({appointment}) => {
	
	const {user} = useAuth()
	const {price,patientName} = appointment;
	const stripe = useStripe();
	const elements = useElements();
	const[clientSecret,setClientSecret] = useState('');
	const [success,setSuccess] = useState('');
	const [error,setError]= useState('');
	const [processing,setProcessing] = useState(false);
	useEffect(()=>{
		fetch('http://localhost:5000/create-payment-intent',{
			method:'POST',
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify({ price })
		})
		.then(res=>res.json())
		.then(data =>setClientSecret(data.clientSecret))
	},[price]);
	const handleSubmit = async (e) =>{
		e.preventDefault();
		if(!stripe || !elements){
			return;
		}
		
		const card = elements.getElement(CardElement);
		if(card == null){
			return;
		
		};
		setProcessing(true)
		const {error, paymentMethod}= await stripe.createPaymentMethod({
			type:'card',
			card,
		})
		
		if(error){
			setError (error.message)
			setSuccess('')
		}
		else{
			setError('')
			console.log(paymentMethod)
		}
		const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
			clientSecret,
			{
			  payment_method: {
				card: card,
				billing_details: {
				  name: patientName,
				},
			  },
			},
		  );
		//   payment prossing
		  if(intentError){
			  setError(intentError.message);
			  setSuccess('');
		  }
		  else{
			  setError('');
			  console.log(paymentIntent);
			  setSuccess('your payment successfully');
			  setProcessing(false)
		  }
		 
	};
	
	
	return (
	<div>
			<form onSubmit={handleSubmit}>
		<CardElement
		  options={{
			style: {
			  base: {
				fontSize: '16px',
				color: '#424770',
				'::placeholder': {
				  color: '#aab7c4',
				},
			  },
			  invalid: {
				color: '#9e2146',
			  },
			},
		  }}
		/>
		 {processing? <CircularProgress></CircularProgress> :<button type="submit" disabled={!stripe}>
		  Pay{price}
		</button>}
	  </form>
	  {
		  error && <p style ={{color:'red'}}>{error}</p>
	  }
	  {
		  success && <p style ={{color:'green'}}>{success}</p>
	  }
	</div>
	);
};

export default CheckOutForm;