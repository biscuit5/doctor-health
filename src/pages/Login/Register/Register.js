import { Container, Grid ,Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import login from '../../../images/login.png';
import React, { useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
	const {user,registerUser,isLoading,authError} = useAuth()
	const [loginData,setLoginData] = useState({})
	const history = useNavigate()
	const handleOnBLUR = e =>{
	
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = {...loginData}
		newLoginData[field] = value;
		console.log(newLoginData,field,value)
		setLoginData(newLoginData)
	}
	const handleLoginSubmit = e =>{
		if(loginData.password !==loginData.password2){
			alert('Your password did not match')
			return
		}
		registerUser(loginData.email,loginData.password,loginData.name,history)
		e.preventDefault()
	}
	return (
		<Container>
			<Grid container spacing={2}>
			<Grid item sx={{mt:8}} xs={12} md ={6}>
			<Typography variant="h4" gutterBottom>
					Please Register
				</Typography>
				{ ! isLoading && <form onSubmit={handleLoginSubmit}>
				
				<TextField sx={{width:'90%', margin:1}} id="standard-basic"
				 label="Your name" 
				 name="name"
				
				 onBlur={handleOnBLUR}
				 variant="standard" />
				<TextField sx={{width:'90%', margin:1}} id="standard-basic"
				 label="Your email" 
				 name="email"
				type="email"
				 onBlur={handleOnBLUR}
				 variant="standard" />
				<br />
				<TextField sx={{width:'90%', margin:1}} id="standard-basic"
				 type="password" 
				 name="password"
				 onBlur={handleOnBLUR}
				 label="password" variant="standard" />

				<TextField sx={{width:'90%', margin:1}} id="standard-basic"
				 type="password" 
				 name="password2"
				 onBlur={handleOnBLUR}
				 label=" Retype password" variant="standard" />

				<Button onClick={handleLoginSubmit} type="submit" variant="contained">register</Button>
				<br />
				<NavLink to="/login"><Button variant="text">Already user?please register</Button></NavLink>
				</form>}
				{isLoading && <CircularProgress />}
				{user?.email && <Alert severity="success">user is a success alert — check it out!</Alert>}
				{authError && <Alert severity="error">{authError}</Alert>}
			</Grid>
			<Grid item xs={12} md ={6}>
				<img style={{width:'100%'}} src={login} alt="" />
			</Grid>
			</Grid>
		</Container>
	);
};

export default Register;