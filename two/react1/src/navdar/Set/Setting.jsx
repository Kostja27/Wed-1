import React from 'react';
import s from "./Setting.module.css";
let Ssett=()=>{  
   let r=(A)=>{
    return eval(A)
   }
    return(
        <div className={s.d1}>
          {r("-54*72+4/4+49+30+565")}
        </div>
    )
}
export default Ssett;