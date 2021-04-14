import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedicer } from '../../Hoc/authRedicer';
import {action_creator_addmess, action_creator_uptext } from "../../redux/reducer_Dialog";
import Dialog from './Dialog';

class Dialogs extends React.Component{
    render(){
        return <Dialog {...this.props} />
    }
}


let mapStateToProps=(state)=>{
    return{ 
        Data: state.DialogPage,
    }
    }
    const Dialogcontener= compose(connect(mapStateToProps,{addmess:action_creator_addmess, uptext:action_creator_uptext}),withAuthRedicer)(Dialogs)
export default Dialogcontener;
