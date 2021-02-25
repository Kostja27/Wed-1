import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';  
import Header from './Ddssd/Ddssd';
import Dialogcontener from './navdar/Dialogs/Dialogcontener';
import Music from './navdar/Musics/Music';
import Nav from './navdar/navbar';
import New from './navdar/NEWs/new';
import Ssett from './navdar/Set/Setting';
import Usercontener from './navdar/User/Usercontener';

import Profily from './profile/Profile';
const  App=(props)=> {
 
  return ( 
    <BrowserRouter>
 <div className="app-Wrap">
      < Header /> 
      <Nav /> 
       <Route path="/Dialog" render={()=><Dialogcontener />}/>
       <Route path="/profile" render={()=><Profily />}/> 
       <Route path="/NEWs"  render={()=><New/>}/>
       <Route path="/Musics" render={()=><Music/>}/>
       <Route path="/Setting" render={()=><Ssett/>}/>
       <Route path="/User" render={()=>< Usercontener/>}/> 
</div>
     </BrowserRouter>
     
 );
}

export default App;