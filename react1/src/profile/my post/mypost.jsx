import React from 'react';
import s from './mypost.module.css';
import Post from './post/post';
let MyPost = ()=>{
    return ( 
          <div className={s.my_post}>
                        my post
                        <div>
                            <textarea>
                            </textarea>
                            </div>
                            <div>
                            <button>пидор</button>
                        </div>
                        <Post messege="hello" />
           </div>
                
    )
}

export default MyPost;