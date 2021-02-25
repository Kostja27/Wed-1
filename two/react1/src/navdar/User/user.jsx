import *as axios from 'axios';
import React from 'react';
import s from "./user.module.css";
import userfoto from "../../Assets/images/user.jpg"
class User extends React.Component{
  constructor(props){
        super(props);
         this.Getuser=this.Getuser.bind(this);}
        Getuser(){axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>
        {this.props.setUser(response.data.items)})
    }
    render(){
        return(<div><button onClick={this.Getuser}>Добавить пользователей</button>
        {this.props.user.map( u=><div key={u.id}> 
        <span>
            <div className={s.nav}>
           <img src={u.photos.small !=null ? u.photos.small:userfoto } className={s.Img}/>
        </div>
            <div>
              { u.followed 
             ?<button onClick={()=>{this.props.unfollow(u.id)} }>unFollow</button>
             :<button onClick={()=>{this.props.follow(u.id)}}> Follow</button> }
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
    </div>)
    }
              }

export default User