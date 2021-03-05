import { authApi } from "../Api/api"

const Set_User_Data="SetUserData"
const LOGIN_ing="logining"


let FirstState={
    id:null,
    email:null,
    login:null,
    isAuth:false,
    
}
const authLog=(State=FirstState,action)=>{
switch (action.type) {
    case Set_User_Data:{
        return{...State,
            ...action.data}
        }
    case LOGIN_ing:{
            return{...State,
                isAuth:true}
            }

        default:
            return State;
    }}
    export const SetUserData=(id,email,login)=> ({type:"SetUserData", data:{id,email,login}})
    export const logining=()=> ({type:"logining", })
    export default   authLog;
    
    export const Authing=()=>{
        return (dispatch)=>authApi.me().then(response=>
            {if(response.data.resultCode===0){ let {id,email,login}=response.data.data;    
            dispatch(SetUserData(id,email,login))}
            })
    }