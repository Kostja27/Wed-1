import React from 'react';
import { NavLink } from 'react-router-dom';
import  s from './Ddssd.module.css';

let Header = (props)=>{
    return (<header className={s.header}>
        <img src="https://static9.depositphotos.com/1594308/1110/i/600/depositphotos_11107478-stock-photo-fantasy.jpg" />
        {props.isAuth?(props.id,props.login,props.email):<NavLink to={"/login"}>
        <button onClick={props.logining}  className={s.butt1}>log in</button></NavLink>}
    </header>)
}
export default Header;