import { combineReducers  } from "redux";
import {  createStore } from "redux";
import  dialog_reducer  from "./reducer_Dialog";
import  postpage_reducer  from "./reducer_PostPage";
import user_reducer from "./reducer_users";

let reducers = combineReducers({
     User:user_reducer,
    DialogPage:dialog_reducer,
    PostPage:postpage_reducer
})
let store = createStore(reducers);
export default store;