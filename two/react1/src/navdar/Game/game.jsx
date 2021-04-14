import React from "react"
import g from "../Game/game.module.css";
import { NavLink,Route  } from 'react-router-dom';

class MyGame extends React.Component{
state={money:100,
    energy:100,
    health:70,
    bustermoney:0,
    flex:0
}
 addmoney=()=>{
     let newmoney=this.state.money+1+this.state.bustermoney;
     let newnergy=this.state.energy-5
     let newhealth=this.state.health-2
    this.setState({money: newmoney,energy:newnergy,health: newhealth })
    if(this.state.energy<=0||this.state.health<=0){alert("game over");
    this.setState({money:0,energy:100,health:70,bustermoney:0,})}
}
relaxation=()=>{
    if(this.state.money>=10&&this.state.energy<=75){
    let newnergy=this.state.energy+25
    let newmonew=this.state.money-10
    this.setState({money:newmonew,energy:newnergy})}
    if(this.state.health<=90){let newhealth=this.state.health+7
    this.setState({health: newhealth})}
}
upbustermoney=()=>{
if((this.state.bustermoney<5)&&this.state.money>=10){
    let bustermoney=1+this.state.bustermoney;
    let moneyAfterbuy=this.state.money-10
    this.setState({bustermoney:bustermoney,money: moneyAfterbuy})}
}
Myshop=()=>{
    if(this.state.money>=100){
   let moneyAfterbuy=this.state.money-100;
   this.Passive_money();
   this.setState({money:moneyAfterbuy})
    }
}
Passive_money=()=>{
    setInterval(() => { let moneyAfterbuy=this.state.money+10;
        this.setState({money:moneyAfterbuy})      
    },  1000); 
   
}
render(){
    return <div className={g.game}>
        <div  className={g.attributes}>dollar {this.state.money} energy {this.state.energy} health {this.state.health} flex {this.state.flex}</div>
        <div ><Menu  relaxation={this.relaxation}
        addmoney={this.addmoney} upbustermoney={this.upbustermoney} Myshop={this.Myshop}/></div>
        <div className={g.menu} >
        <div className={g.nav}>
        <NavLink to ="/Game/Home"className={g.href} >Home</NavLink>
        </div>
        <div className={g.nav}>
        <NavLink to ="/Game/Work"className={g.href} >Work</NavLink>
        </div>
        <div className={g.nav}>
        <NavLink to ="/Game/Business" className={g.href}>Business</NavLink>
        </div>
        <div className={g.nav}>
        <NavLink to ="/Game/Education"className={g.href} >Education</NavLink>
        </div>
        <div className={g.nav}>
        <NavLink to ="/Game/Shop"className={g.href}>Shop</NavLink>
        </div>
        </div>
        <div className={g.ava}></div>
    </div>
}
}
export default MyGame

const Menu=(props)=>{debugger
    return <div  className={g.path}>
  <Route path="/Game/Home" render={()=><Home relaxation={props.relaxation} />}/>
  <Route path="/Game/Work" render={()=><Work upbustermoney={props.upbustermoney} addmoney={props.addmoney}/>} />
  <Route path="/Game/Business" render={()=><Business Myshop={props.Myshop}/>}/>
  <Route path="/Game/Education" render={()=><Education/>}/>
  <Route path="/Game/Shop" render={()=><Shop/>}/>
</div>
}

const Home=(props)=>{debugger
    return <div className={g.Home}>
        <div >
            <button onClick={props.relaxation}>relaxation</button>
            <button>Buy home</button>
        </div>
    </div>
}
const Work=(props)=>{debugger
    return <div >
        <div>
        <div className={g.nav_work}>
        <NavLink to ="/Game/Work/Factory"className={g.href} >Factory</NavLink>
        </div><div className={g.nav_work}>
        <NavLink to ="/Game/Work/Courier"className={g.href} >Courier</NavLink>
        </div><div className={g.nav_work}>
        <NavLink to ="/Game/Work/YourOffice"className={g.href} >YourOffice</NavLink>
        </div>
        </div>
        <Route path="/Game/Work/Factory" render={()=><Factory upbustermoney={props.upbustermoney}
        addmoney={props.addmoney}/>}/>
        <Route path="/Game/Work/Courier" render={()=><Courier/>}/>
        <Route path="/Game/Work/YourOffice" render={()=><YourOffice/>}/>
        
    </div>
}
const Factory=(props)=>{return<div>
    <div>upgreat </div><div>click<button onClick={props.upbustermoney}>buy</button></div>
    <button onClick={props.addmoney}>Farm</button>
</div>

}
const Courier=()=>{return<div></div>
    
}
const YourOffice=()=>{return<div></div>
    
}




const Business=(props)=>{
    return <div>
      shop <button onClick={props.Myshop}>Buy</button>
    </div>
}
const Education=(props)=>{
    return <div>
       
    </div>
}
const Shop=(props)=>{
    return <div>
        
    </div>
}