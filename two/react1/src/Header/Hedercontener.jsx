import React from 'react';
import { connect } from 'react-redux';
import Header from './Heder';
import {Authing,logining} from "./../redux/reducer_auth"



class HeaderApi extends React.Component{
componentDidMount(){
    this.props.Authing()}
    render(){
        return<Header {...this.props} />}
    }
    let mapStateToProps=(state)=>{
return{
    isAuth:state.Heder.isAuth,
    login:state.Heder.login,
    email:state.Heder.email,
    id:state.Heder.id,
}}


const Headercontener=connect(mapStateToProps, {Authing, logining})( HeaderApi) 
export default Headercontener



