import React from 'react';
import New from './new';
import s from "./new.module.css";



class News extends React.Component{
     state={name:[],
    new:[],
    data:[],
    Postname:"kota",
    Postnew:"I know it)",
    Postdata:"10.03.2021", };
    NewName=React.createRef();
    NewNew=React.createRef();
    NewData=React.createRef();
    ChangeName=()=>{
       let Nametext=this.NewName.current.value;
       this.state.Postname=Nametext;
       this.forceUpdate();
};
Changenew=()=>{
    let Newtext=this.NewNew.current.value;
    this.state.Postnew=Newtext;
    this.forceUpdate();
};
Changedata=()=>{
    let datatext=this.NewData.current.value;
    this.state.Postdata= datatext;
    this.forceUpdate();
};


Add=()=>{
    this.state.name.push(this.state.Postname)
    this.state.Postname=""
    this.state.new.push(this.state.Postnew)
    this.state.Postnew=""
    this.state.data.push(this.state.Postdata)
    this.state.Postdata=""
    this.forceUpdate();

}
 render(){
     return <div>
            <div>name<input value={this.state.Postname} onChange={this.ChangeName} ref={this.NewName} ></input>
            new<input value={this.state.Postnew} onChange={this.Changenew} ref={ this.NewNew} ></input>
            data<input value={this.state.Postdata} onChange={this.Changedata}  ref={ this.NewData}></input>
            </div>
            <div><button onClick={this.Add}  className={s.b1}>Add</button></div>
        <table>
            <tr className={s.d1}>
                <td className={s.td1}>name</td>
                <td className={s.td2}>new</td>
                <td className={s.td3}>data</td>
            </tr>
            <tr><td className={s.td1}>{this.state.name}</td>
            <td className={s.td2}>{this.state.new}</td>
            <td className={s.td3}>{this.state.data}</td>
            </tr>
        </table>
        </div>
    }
 }


export default News