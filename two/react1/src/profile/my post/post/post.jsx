import React from 'react';
import s from './post.module.css';

let Post =(props)=>{
    let Merr=(props)=>{return (<div>{props.mess}</div>)}
    let MEsss=props.Merr.map((M)=><Merr mess={M.mess} id={M.id}/>) 
   return (<div className={s.post}>
                       <div>{MEsss}</div> 
             </div>                         
    )
};
export default Post;


