import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';
let Nav = ()=>{
    return ( <nav className={s.nav}>
    <div>
        <NavLink to ="/profile" className={s.na}>Profile</NavLink>
    </div>
    <div>
        <NavLink to="/Dialog"className={s.na}>Messege</NavLink> 
    </div>
    <div>
        <NavLink to="/NEWs"className={s.na}>NEW</NavLink> 
    </div>
    <div>
        <NavLink to="/Musics"className={s.na}>music</NavLink> 
    </div>
    <div>
        <NavLink to="/Setting"className={s.na}>Settings</NavLink> 
    </div>
</nav>)
}
export default Nav;