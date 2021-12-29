import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {
	const [email,setEmail] = useState('');
	const [success,setSuccess] = useState(false)
	const {token} = useAuth()
	const handleBlurSubmit = e =>{
		setEmail(e.target.value)
	};
	const handleAdminSubmit = e =>{
		const user ={email};
		fetch('https://ancient-cliffs-95012.herokuapp.com/users/admin',{
			method:'PUT',
			headers:{
				'authorization':`bearer ${token}`,
				'content-type':'application/json'
			},
			body:JSON.stringify(user)
		})
		.then(res =>res.json())
		.then(data =>{
			if(data.modifiedCount){
				setSuccess(true)
				setEmail('')
				console.log(data)
			}
			
		})
		e.preventDefault()
	};
	return (
		<div>
			<h1>makeAdmin page</h1>
			<form onSubmit={handleAdminSubmit}>
			<TextField 
			id="standard-basic" 
			sx={{width:'50%'}}
			label="email" 
			type="email"
			onBlur = {handleBlurSubmit}
			variant="standard" />
			

			<Button type="submit" variant="contained">makeAdmin</Button>
			</form>
			{success && <Alert severity="success">make admin success</Alert>}
		</div>
	);
};

export default MakeAdmin;