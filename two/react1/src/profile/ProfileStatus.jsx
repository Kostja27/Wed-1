import React from 'react';

class ProfileStatus extends React.Component{
    state={
        editMode:false,
        status:this.props.status
    }
    changeOn=()=>{
        this.setState({editMode:true}) }
    changeOff=()=>{this.setState({editMode:false})
       this.props.UpdateStat(this.state.status) }
    onStatusChange=(e)=>{
      this.setState({status:e.currentTarget.value})  
    }
    componentDidUpdate(prevProps,prevState){
        debugger
    if(prevProps.status!==this.props.status)
    {this.setState({status:this.props.status})}
    }
    render(){
    return<div>
    {!this.state.editMode &&<div onDoubleClick={this.changeOn}>{this.props.status}</div>}
     {this.state.editMode &&<div onFocus={true} onBlur={this.changeOff}><input onChange={this.onStatusChange} value={this.state.status} /></div>}
    </div>
}
}

export default  ProfileStatus
