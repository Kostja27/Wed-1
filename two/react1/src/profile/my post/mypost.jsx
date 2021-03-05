import React from 'react';
import s from './mypost.module.css';
import Post from './post/post';

let MyPost = (props)=>{
    let postText=React.createRef()
    let addPost=()=>{props.addpost()     
     }
     let OnPostChang=()=>{
         let text=postText.current.value;
         props.chang(text);
     }
    return ( 
        <div className={s.my_post}>
            my post
            <div>
                <textarea onChange={OnPostChang} 
                ref={postText} value={props.PostText}/>
                <button onClick={addPost}>add</button>
            </div>
            <Post Merr={props.MMerr} />
        </div>           
    )
};
export default MyPost;




