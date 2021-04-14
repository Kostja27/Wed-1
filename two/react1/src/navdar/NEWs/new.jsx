import React from 'react';
import { ReactReduxContext } from 'react-redux';
import s from "./new.module.css";


let New=()=>{
    let masss={name:[],
        new:[],
        data:[],
        Postname:"d",
        Postnew:"d",
        Postdata:"d"
    };
    let NewName=React.createRef();
    let NewNew=React.createRef();
    let NewData=React.createRef();
    let ChangeName=()=>{
        let text=NewName.current.value;
        masss.Postname=text;
        console.log(masss.Postname)
    };

    return(<div>
        <div>name<input value={masss.Postname} onChange={ChangeName} ref={NewName} ></input>
        new<input value={masss.Postnew} ref={ NewNew} ></input>
        data<input value={masss.Postdata}  ref={ NewData}></input>
        </div>
        <div><button  className={s.b1}>Add</button></div>
    <table>
        <tr className={s.d1}>
            <td className={s.td1}>name</td>
            <td className={s.td2}>new</td>
            <td className={s.td3}>data</td>
        </tr>
        <tr>{masss.name}</tr>
    </table>
    </div>
    )
}
export default New;
