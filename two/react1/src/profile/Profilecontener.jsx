import React from 'react';
import { connect } from 'react-redux';
import Profily from './Profile';
import { Profiler } from '../redux/reducer_PostPage';
import { withRouter } from 'react-router-dom';
import { UserAp } from '../Api/api';

class ProfilyApi extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){userId=2}
        this.props.Profiler(userId)}
    render(){
        return <div>
            <Profily {...this.props} profile={this.props.profile}/>
        </div>
        
    }

}
let mapStateToProps=(state)=>{
    return{profile:state.PostPage.profile
    }}
    let ProfilyApiRout=withRouter( ProfilyApi)

let Profilcontener =connect(mapStateToProps, { Profiler})(ProfilyApiRout)
export default Profilcontener