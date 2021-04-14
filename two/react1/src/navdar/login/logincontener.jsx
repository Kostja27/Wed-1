import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './login';






class login extends React.Component{


   render(){
       return<LoginPage />
   } 
}

const Logincontener=connect()(login)
export default Logincontener