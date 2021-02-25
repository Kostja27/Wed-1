import React from 'react';
import { connect } from 'react-redux';
import {action_creator_addmess, action_creator_uptext } from "../../redux/reducer_Dialog";
import Dialog from './Dialog';

// let Dialogcontener=(props)=>{
//     let Addmess=()=>{
//         props.dispatch(action_creator_addmess())
//     }
//     let Uptext=(text)=>{
//         props.dispatch(action_creator_uptext(text))}

 
//     return(< Dialog addmess={Addmess} uptext={Uptext} Data={props.Data}/>
//     )};
let mapStateToProps=(state)=>{
    return{ 
        Data: state.DialogPage 
    }
    }
    let mapDispatchToProps=(dispatch)=>{
        return{
            addmess: ()=>{dispatch(action_creator_addmess())},
            uptext: (text)=>{dispatch(action_creator_uptext(text))}
        }  
    }

    const Dialogcontener=connect(mapStateToProps,mapDispatchToProps)(Dialog)
export default Dialogcontener;
