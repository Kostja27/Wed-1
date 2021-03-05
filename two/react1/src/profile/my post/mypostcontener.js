import React from 'react';
import { connect } from 'react-redux';
import {action_creator_addpost,action_creator_uppost } from "../../redux/reducer_PostPage";
import MyPost from './mypost';




let mapStateToProps=(state)=>{
return{ 
    MMerr: state.PostPage.MMerr, 
    PostText:state.PostPage.PostText
}
}
let mapDispatchToProps=(dispatch)=>{
    return{
        chang: (text)=>{let action=action_creator_uppost(text)
        dispatch(action)},
        addpost: ()=>{dispatch(action_creator_addpost())}
    }  
}
const  MyPostcontener=connect(mapStateToProps,mapDispatchToProps)(MyPost)
export default MyPostcontener;