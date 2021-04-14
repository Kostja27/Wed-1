import { ProfileApi, UserAp } from "../Api/api"

const ADD_POST="addpost"
const UPP_POST="uppost"
const  Set_user_profile="SetUserProfile"
const  Get_Status="GetStatus"


let initialState={
    MMerr:[
    {mess:"hrte", id:1},
    {mess:"regre", id:2},
    {mess:"regre", id:3},
    {mess:"2regre", id:4},
    {mess:"2regre", id:5}],
    PostText:"Добавь пост",
    profile:null,
    status:""
    

}
 const postpage_reducer=(Mas=initialState,action)=>{
     switch (action.type) {
case ADD_POST:    
    {let newpost={
        id:6,
        mess:Mas.PostText
    }
    return{...Mas,
        MMerr:[...Mas.MMerr,newpost ],
        PostText:""}
    } 
case UPP_POST: 
    return{...Mas,
        PostText:action.PostText}
case Set_user_profile: 
    return{...Mas,profile:action.profile
}
case Get_Status: debugger
    return{
        ...Mas,status:action.status
}


default:
    return Mas;}
}
export const action_creator_addpost=()=> ({type:"addpost"})
export const action_creator_uppost=(text)=>({type:"uppost", PostText:text})
export const Setuserprofile=(profile)=> ({type:"SetUserProfile",profile})
export const GetSt=(status)=> ({type:"GetStatus",status})


export default  postpage_reducer;


export const Profiler=(userId)=>{
    return(dispatch)=>UserAp.Profiler(userId)
        .then(response=>{
            dispatch(Setuserprofile(response.data));}
        )
    }
export const GetStat=(userId)=>{
    return(dispatch)=>ProfileApi.GetStatus(userId)
        .then(response=>{debugger
            dispatch(GetSt(response.data));}
            )
        }
export const UpdateStat=(status)=>{
    return(dispatch)=>ProfileApi.UpdateStatus(status)
        .then(response=>{if (response.data.resultCode===0)
            dispatch(GetSt(status));}
                )
        }