import { Container, Grid,Alert,CircularProgress  } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import login from '../../../images/login.png';
import React, { useState } from 'react';
import { NavLink,useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Login = () => {
	const{user,signInGoogle, isLoading,authError,loginUser}=useAuth()
	const [loginData,setLoginData] = useState({})

	const location = useLocation();
	const Navigate = useNavigate()
	const handleOnBLUR = e =>{
		
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = {...loginData}
		newLoginData[field] = value;
		setLoginData(newLoginData)
	}
	const handleLoginSubmit = e =>{
		loginUser(loginData.email,loginData.password,location,Navigate)
		e.preventDefault()
	}
	const handleGoogleSign = ()=>{
		signInGoogle(location,Navigate)
	}
	return (
		<Container>
			<Grid container spacing={2}>
			<Grid item sx={{mt:8}} xs={12} md ={6}>
			<Typography variant="h4" gutterBottom>
					Please login
				</Typography>
				{! isLoading && <form onSubmit={handleLoginSubmit}>
				
				<TextField sx={{width:'90%', margin:1}} id="standard-basic"
				 label="Your email" 
				 name="email"
				 onBlur={handleOnBLUR}
				 variant="standard" />
				<br />
				<TextField sx={{width:'90%', margin:1}} id="standard-basic"
				 type="password" 
				 name="password"
				 onBlur={handleOnBLUR}
				 label="password" variant="standard" />

				<Button onClick={handleLoginSubmit} type="submit" variant="contained">submit</Button>
				<br />
				<NavLink to="/register"><Button variant="text">New user please register</Button></NavLink>
				<p>------------------------------</p>
				<Button onClick={signInGoogle} variant="contained">googleSignIn</Button>
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

export default Login;