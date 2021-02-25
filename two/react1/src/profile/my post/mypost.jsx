import React from 'react';
import s from './mypost.module.css';
import Post from './post/post';
import {action_creator_addpost,action_creator_uppost } from "../../redux/reducer_PostPage";

let MyPost = (props)=>{
    let postText=React.createRef()
    let addPost=()=>{props.addpost()
        //  props.dispatch(action_creator_addpost())
        
     }
     let OnPostChang=()=>{
         let text=postText.current.value;
         props.chang(text);
        //  let action=action_creator_uppost(text)
        //   props.dispatch(action)

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




