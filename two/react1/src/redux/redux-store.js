import { applyMiddleware, combineReducers  } from "redux";
import {  createStore } from "redux";
import authLog from "./reducer_auth";
import  dialog_reducer  from "./reducer_Dialog";
import  postpage_reducer  from "./reducer_PostPage";
import user_reducer from "./reducer_users";
import  thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
     User:user_reducer,
    DialogPage:dialog_reducer,
    PostPage:postpage_reducer,
    Heder:authLog,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;
export default store;