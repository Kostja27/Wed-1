const ADD_MESS="addmess"
const UP_TEXT="uptext"
let initialState={tialogData: [
    {id: 1, name: "Костя"},
    {id: 2, name: "илья"},
    {id: 3, name: "денис"},
    {id: 4, name: "паша"},
    {id: 5, name: "андрей"} ],
   messData: [
    {id: 1, mess: "Heloy"},
    {id: 2, mess: "Hi"},
    {id: 3, mess: "Fuck"},
    {id: 4, mess: "You"}],
    MesText:"hello",
}
const dialog_reducer=(Mas=initialState,action)=>{
    switch (action.type) {
        case ADD_MESS:  {
        let newmess={
            id:5,
            mess:Mas.MesText
        }
        return{...Mas,
            messData:[...Mas.messData, newmess],
            MesText:""}
        }
      case UP_TEXT:{
        return{...Mas,
            MesText:action.MesText}
        }
        default:
            return Mas;
    }}
    export const action_creator_addmess=()=> ({type:"addmess"})
    export const action_creator_uptext=(text)=> ({type:"uptext", MesText:text})
    export default   dialog_reducer;
    