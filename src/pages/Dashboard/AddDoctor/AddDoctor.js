import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
const AddDoctor = () => {
	
	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [image,setImage] = useState(null)
	const [success,setSuccess]= useState('')
	const handleSubmit = e =>{
		e.preventDefault();
		if(!image){
			return;
		}

		const formData = new FormData();
			formData.append('name',name);
			formData.append('email',email);
			formData.append('image',image);
			fetch('https://ancient-cliffs-95012.herokuapp.com/doctors', {
			method: 'POST',
			body: formData
			})
			.then(res => res.json())
			.then(data => {
				if(data.insertedId){
					setSuccess('doctor added to successfully')
					console.log('add to doctor successfully');
				}
			
			})
			.catch(error => {
			console.error('Error:', error);
			});

			
	}
	
	
	return (
		<div>
			<h2>add doctor here</h2>
			<form onSubmit={handleSubmit} >
			<TextField 
			sx={{width:'50%'}}
			name= 'name'
			onChange={e=>setName(e.target.value)}
			required 
			label="name" variant="filled" />
			<br />
			<TextField 
			sx={{width:'50%'}}
			name= 'email'
			type='email'
			required
			onChange={e=>setEmail(e.target.value)}
			label="email" variant="filled" />
			<br />
			<Input 
			accept="image/*" 
			
			 type="file" 
			 onChange={e=>setImage(e.target.files[0])}
			 
			 />
			 <br />
				<Button variant="contained" type="submit">
					add photo
				</Button>
			</form>
			{success && <p style={{color:'green'}}>{success}</p> }
		</div>
	);
};

export default AddDoctor;