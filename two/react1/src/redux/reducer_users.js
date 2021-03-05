import {UserAp} from "../Api/api"
const FOLLOW="Follow"
const An_Follow="ANFollow"
const Set_User="setusers"
const Set_page="setpage"
const set_total="settotal"
const Toog_Fetch="ToogFetch"
const Following_In_Progres="followingInProgres"

let initialState={
    user:[
    // { id:1,followed:true, fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg", Fullname:"дима",status:"соло", location:{city:"киев",country:"украина"}},
    // { id:2,followed:false, fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg",Fullname:"вика",status:"в пути", location:{city:"москва",country:"россия"}},
    // { id:3,followed:true,fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg", Fullname:"антон",status:"кек", location:{city:"питер",country:"россия"}},
    // { id:4,followed:false, fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg", Fullname:"катя",status:"соло", location:{city:"львов",country:"украина"}},
    // { id:5,followed:true,fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg", Fullname:"толя",status:"шрек", location:{city:"житомир",country:"украина"}}],
    ],
pagesize:5,
Total_count:0,
currentpage:1,
isFetching:true,
followingInProgres:[],
}
 const user_reducer=(Mas=initialState,action)=>{
     switch (action.type) {
        case FOLLOW:    
     return{
         ...Mas,
        user: Mas.user.map(u=>{
            if (u.id===action.userID){
                return{...u, followed:true}
           }
        return u;
        })
        } 
case An_Follow: 
return{
    ...Mas,
   user: Mas.user.map(u=>{
       if (u.id===action.userID){
           return{...u, followed:false}
      }
   return u;
   })
   }
case Set_User:
       return{
           ...Mas, user:action.user
       }
case Set_page:{
        return{
            ...Mas,currentpage:action.currentpage} 
        }
case set_total:{
        return{
            ...Mas,Total_count:action.tuc}
        }
case Toog_Fetch:{
            return{
                ...Mas,isFetching:action.isFetching}
            }
case Following_In_Progres:{
                return{
                    ...Mas,followingInProgres:action.isFetching 
                    ?[...Mas.followingInProgres, action.userID]
                    :Mas.followingInProgres.filter(id=>id!=action.userID)}
                }
   default:
       return Mas;
}}
export const followAC=(userID)=> ({type:"Follow", userID})
export const unfollowAC=(userID)=>({type:"ANFollow",userID})
export const setusers=(user)=>({type:"setusers",user})
export const setpage=(currentpage)=>({type:"setpage",currentpage})
export const set_Totalcount=(tuc)=>({type:"settotal",tuc})
export const Fetch=(isFetching)=>({type:"ToogFetch",isFetching})
export const Following_In=(isFetching,userID)=>({type:"followingInProgres",isFetching,userID})

export const GETuser=(currentpage,pagesize,)=>{
    return(dispatch)=>{
    dispatch(Fetch(true));
    UserAp.GetUser(currentpage,pagesize).then(data=>
       { dispatch(Fetch(false));
        dispatch(setusers(data.items));
        dispatch(set_Totalcount(data.totalCount))}
    )}}
    export const follow=(userid)=>{
        return(dispatch)=>{
            dispatch(Following_In(true,userid))
            UserAp.Follow(userid)
            .then(response=>{if(response.data.resultCode==0)
                {dispatch(followAC(userid))}
                dispatch(Following_In(false,userid))})}}
        
    export const unfollow=(userid)=>{
            return(dispatch)=>{
                dispatch(Following_In(true,userid))
                 UserAp.unFollow(userid)
                .then(response=>{if(response.data.resultCode==0)
                    {dispatch(unfollowAC(userid))}
                    dispatch(Following_In(false,userid))})}}
            
                    





export default  user_reducer;



