import React from 'react';
import s from "./user.module.css";
import userfoto from "../../Assets/images/user.jpg"
import { NavLink } from 'react-router-dom';
let User=(props)=>{
    let pagecount=Math.ceil(props.Total_count/props.pagesize)
    let page=[];
    for(let i=1; i <= pagecount;i++) {
        page.push(i)
    }
        return(<div>
            <div >
               {page.map(d=>{ 
                   return<span className={props.currentpage===d &&  s.list}
                onClick={()=> props.onPagechange(d)}>{d}</span>
               })}
           </div>
        <div>
        {props.user.map( u=><div key={u.id}> 
        <span>
            <div className={s.nav}>
                <NavLink to={"/Profile/"+u.id}>
           <img src={u.photos.small !=null ? u.photos.small:userfoto } className={s.Img}/>
           </NavLink>
        </div>
            <div>
              { u.followed 
             ?<button disabled={props.followingInProgres.some(id=>id===u.id)} onClick={()=>{props.unfollow(u.id)}}>unFollow</button>
             :<button  disabled={props.followingInProgres.some(id=>id===u.id)} onClick={()=>{props.follow(u.id)}}> Follow</button>}
            </div>  
        </span>
        <span>
            <span>
                <div>{u.name}</div><div>{u.status}</div>
            </span>
            <span>
            <div>{"u.location.city"}</div><div>{"u.location.country"}</div>
           </span>
        </span>
        </div>)}
    </div>
    </div>)
    }
              

export default User