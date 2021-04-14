import React from 'react';
import { connect } from 'react-redux';
import Profily from './Profile';
import { Profiler,UpdateStat,GetStat } from '../redux/reducer_PostPage';
import { withRouter } from 'react-router-dom';
import { withAuthRedicer } from '../Hoc/authRedicer';
import { compose } from 'redux';
class ProfilyApi extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){userId=2}
        this.props.Profiler(userId);
        this.props.GetStat(userId);
        
    }
    render(){
        return <div>
            <Profily {...this.props} profile={this.props.profile}
            status={this.props.status}
            UpdateStat={this.props.UpdateStat}/>
        </div>
        
    }
}
let mapStateToProps=(state)=>{
    return{profile:state.PostPage.profile,
        status:state.PostPage.status
    }}


let Profilcontener =compose(connect(mapStateToProps, { Profiler,GetStat,UpdateStat} ),withRouter,withAuthRedicer)(ProfilyApi)
export default Profilcontener