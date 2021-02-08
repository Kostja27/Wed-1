import React from 'react';
import s from './post.module.css';
let Post = (props)=>{
    return ( 
                        <div className={s.post}>{props.messege} </div>                            
    )
}

export default Post;