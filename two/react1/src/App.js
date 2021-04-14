import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';  
import Headercontener from './Header/Hedercontener';
import Dialogcontener from './navdar/Dialogs/Dialogcontener';
import MyGame from './navdar/Game/game';
import Logincontener from './navdar/login/logincontener';
import Music from './navdar/Musics/Music';
import Nav from './navdar/navbar';
import News from './navdar/NEWs/newContener';
import Ssett from './navdar/Set/Setting';
import Usercontener from './navdar/User/Usercontener';
import Profilcontener from './profile/Profilecontener';

const  App=(props)=> {
 
  return ( 
    <BrowserRouter>
 <div className="app-Wrap">
      < Headercontener /> 
      <Nav /> 
       <Route path="/Dialog" render={()=><Dialogcontener />}/>
       <Route path="/profile/:userId?" render={()=><Profilcontener />}/> 
       <Route path="/NEWs"  render={()=><News/>}/>
       <Route path="/Musics" render={()=><Music/>}/>
       <Route path="/Game" render={()=><MyGame/>}/>
       <Route path="/Setting" render={()=><Ssett/>}/>
       <Route path="/User" render={()=>< Usercontener/>}/>
       <Route path="/Login" render={()=>< Logincontener />}/> 
</div>
     </BrowserRouter>
     
 );
}

export default App;