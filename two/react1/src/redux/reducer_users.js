const FOLLOW="Follow"
const An_Follow="ANFollow"
const Set_User="setusers"
let initialState={
    user:[
    // { id:1,followed:true, fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg", Fullname:"дима",status:"соло", location:{city:"киев",country:"украина"}},
    // { id:2,followed:false, fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg",Fullname:"вика",status:"в пути", location:{city:"москва",country:"россия"}},
    // { id:3,followed:true,fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg", Fullname:"антон",status:"кек", location:{city:"питер",country:"россия"}},
    // { id:4,followed:false, fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg", Fullname:"катя",status:"соло", location:{city:"львов",country:"украина"}},
    // { id:5,followed:true,fotourl:"https://cs10.pikabu.ru/post_img/big/2019/06/12/9/1560352704159397858.jpg", Fullname:"толя",status:"шрек", location:{city:"житомир",country:"украина"}}],
    ]}
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
           ...Mas, user:[ ...action.user]
       }
   default:
       return Mas;
}}
export const followAC=(userID)=> ({type:"Follow", userID})
export const unfollowAC=(userID)=>({type:"ANFollow",userID})
export const setusers=(user)=>({type:"setusers",user})

export default  user_reducer;