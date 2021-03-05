import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialog.module.css";

let Dialog=(props)=>{
    let PostMess=React.createRef()
    let addmess=()=>{
        props.addmess()
    }
    let uptext=()=>{let text=PostMess.current.value;
        props.uptext(text)}

let tialogg= props.Data.tialogData.map((t)=><Tialog name={t.name} id={t.id}/>)
let messelem= props.Data.messData.map((m)=> <Mess mess={m.mess} id={m.id}/>)
    
    return( <div className={s.d1} >
                <div className={s.name}>
                {tialogg}
                </div>
               
               <div className={s.mess}><div>{messelem}
                   <textarea onChange={uptext} ref={PostMess} value={props.Data.MesText}
                   />
                   <button onClick={addmess}>Recive</button>
                   </div>

                 </div>

            </div>
    )}
export default Dialog;
let Tialog =(props)=>{
    return(
        <div >
        <NavLink to={"/Dialog/"+props.id}>{props.name}</NavLink>
        </div>
    )};
let Mess =(props)=>{
    return(
        <div >{props.mess}</div>
    )};