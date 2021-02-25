const ADD_POST="addpost"
const UPP_POST="uppost"
let initialState={
    MMerr:[
    {mess:"hrte", id:1},
    {mess:"regre", id:2},
    {mess:"regre", id:3},
    {mess:"2regre", id:4},
    {mess:"2regre", id:5}],
    PostText:"Добавь пост",
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
default:
    return Mas;}
}
export const action_creator_addpost=()=> ({type:"addpost"})
export const action_creator_uppost=(text)=>({type:"uppost", PostText:text})

export default  postpage_reducer;