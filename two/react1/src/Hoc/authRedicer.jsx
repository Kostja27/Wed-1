import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForRedicer=(state)=>({
    isAuth:state.Heder.isAuth
  })
export const withAuthRedicer=(Component)=>{
  class ResicerComponent extends React.Component{
      render(){
        if (!this.props.isAuth) return <Redirect to={"/Login"}/>
        return<Component{...this.props}/>
      }}
  let DialogRedirectContener= connect(mapStateToPropsForRedicer)(ResicerComponent)
return DialogRedirectContener
    }