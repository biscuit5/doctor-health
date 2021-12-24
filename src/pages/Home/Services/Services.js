import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

const services = [
	{
		name:'Fluoride Treatment',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quibusdam nemo laudantium eius eum quas cupiditate ipsam impedit perferendis exercitationem',
		img:fluoride 
	},
	{
		name:'Cavity filling',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quibusdam nemo laudantium eius eum quas cupiditate ipsam impedit perferendis exercitationem',
		img:cavity
	},
	{
		name:'teath whitening',
		description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quibusdam nemo laudantium eius eum quas cupiditate ipsam impedit perferendis exercitationem',
		img:whitening
	}
];

const Services = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			 <Typography variant="h5" gutterBottom component="div">
        OUR SERVICES
      </Typography>
	  <Typography sx={{ m: 2 , fontWeight: 500}} variant="h4" component="div">
						OUR SERVICES WE PROVIDE
					</Typography>
      <Container>
	  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
		   services.map(service => <Service
		   key={service.name}
		   service={service}
		   
		   ></Service>)
	   }
      </Grid>
	  </Container>
    </Box>
	);
};

export default Services;