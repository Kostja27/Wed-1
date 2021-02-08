import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialog.module.css";

let Tialog =(props)=>{
    return(
        <div >
        <NavLink to={"/Dialog/"+props.id}>{props.name}</NavLink>
        </div>
    )
};
let Mess =(props)=>{
    return(
        <div >
        {props.mess}
        </div>
    )
};
let tialogData= [
    {id: 1, name: "Костя"},
    {id: 2, name: "илья"},
    {id: 3, name: "денис"},
    {id: 4, name: "паша"},
    {id: 5, name: "андрей"}
]
let messData= [
    {id: 1, mess: "Heloy"},
    {id: 2, mess: "Hi"},
    {id: 3, mess: "Fuck"},
    {id: 4, mess: "You"}
  
]
let tialogg=tialogData
.map((tialogData)=><Tialog name={tialogData.name} id={tialogData.id}/>)

let messelem=messData
.map((messData)=> <Mess mess={messData.mess} id={messData.id}/>)


let Dialog=()=>{
    return( <div className={s.d1} >
                <div className={s.name}>
                {tialogg}
                </div>
               <div className={s.mess}>
                {messelem}
                 </div>
            
            </div>
    )
}
export default Dialog;