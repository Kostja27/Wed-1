import React from 'react';
import { connect } from 'react-redux';
import { followAC, setpage, setusers, unfollowAC,set_Totalcount, Fetch, Following_In, GETuser,follow,unfollow } from '../../redux/reducer_users';
import User from './user';
import Prelouder from "..//../Prelouder.jsx/1"
import {UserAp} from "../.././Api/api"

class UserApi extends React.Component{
  constructor(props){
        super(props);  }    
        componentDidMount(){this.props.GETuser(this.props.currentpage, this.props.pagesize)}
    onPagechange=(pagenamder)=>{
         this.props.setpage(pagenamder); 
         this.props.GETuser(pagenamder, this.props.pagesize)
    }
    render(){ 
        return<>
        {this.props.isFetching ? <Prelouder/> :null}
        <User Total_count={this.props.Total_count}
            pagesize={this.props.pagesize}
            currentpage={this.props.currentpage}
            onPagechange={this.onPagechange}
            user={this.props.user}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followingInProgres={this.props.followingInProgres}
            />
            </>
    }
              }

let mapStateToProps=(state)=>{
return{ 
    user:state.User.user,
    pagesize:state.User.pagesize,
    Total_count:state.User.Total_count,
    currentpage:state.User.currentpage,
    isFetching:state.User.isFetching,
    followingInProgres:state.User.followingInProgres
}}


let Usercontener=connect(mapStateToProps,{setpage, GETuser,follow,unfollow})(UserApi)
export default Usercontener