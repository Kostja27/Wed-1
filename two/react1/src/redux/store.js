// import dialog_reducer from "./reducer_Dialog";
// import postpage_reducer from "./reducer_PostPage";

let Rerender =()=>{
}
let Store={
    _Mas:{
    PostPage: {
        MMerr:[
        {mess:"hrte", id:1},
        {mess:"regre", id:2},
        {mess:"regre", id:3},
        {mess:"2regre", id:4},
        {mess:"2regre", id:5}],
        PostText:"Добавь пост",
    },
   DialogPage:
   {tialogData: [
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
    MesText:"hello",}
},
    getmas(){
        return this._Mas
    },
    subscribe( observer){
        Rerender = observer;
    },
  
    dispatch(action){
        this._Mas.PostPage=postpage_reducer(this._Mas.PostPage, action);
        this._Mas.DialogPage=dialog_reducer(this._Mas.DialogPage, action);
        Rerender(this._Mas)
    }
    
   
}


export default Store