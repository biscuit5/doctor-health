import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation,Navigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
	const{user,isLoading}=useAuth()
  const location = useLocation();
	if(isLoading){return <CircularProgress/>}
	
  if(user?.email){
    return children;
  }
  
  return <Navigate to="/login" state={{ from: location }} />;

};

export default PrivateRoute;