import './App.css';
import React from "react";
import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Appointment from './pages/Appointments/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';




function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Switch>
          
         
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />

          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />

          </PrivateRoute>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    
    </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
