import React from 'react';
import { connect } from 'react-redux';
import { followAC, setusers, unfollowAC } from '../../redux/reducer_users';
import User from './user';
let mapStateToProps=(state)=>{
return{ 
    user: state.User.user
}
}
let mapDispatchToProps=(dispatch)=>{
    return{
    follow:(userid)=>{
        dispatch(followAC(userid))},
    unfollow:(userid)=>{
        dispatch(unfollowAC(userid))},
    setUser:(user)=>{
        dispatch(setusers(user))},
    }
}


let Usercontener=connect(mapStateToProps,mapDispatchToProps)(User)
export default Usercontener