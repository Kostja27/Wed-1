import React from 'react';
import s from "./new.module.css";



let Music=()=>{
    let Add=(a)=>{
       let d= a.map(function(r){ return r*2})
        return d
    }
     
    return( 
        <div className={s.d1}>
           {Add([7,6,6])}
        </div>
    )
}
export default Music;