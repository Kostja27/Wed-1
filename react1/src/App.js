import React, { Profiler } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';  
import Header from './Ddssd/Ddssd';
import Dialog from './navdar/Dialogs/Dialog';
import Music from './navdar/Musics/Music';
import Nav from './navdar/navbar';
import New from './navdar/NEWs/new';
import Ssett from './navdar/Set/Setting';
import profily from './profile/profile';
const  App=()=> {
  return ( 
    <BrowserRouter>
 <div className="app-Wrap">
      < Header />
      <Nav /> 
       <Route path="/Dialog" component= {Dialog}/>
       <Route path="/profile" component= {profily}/> 
       <Route path="/NEWs" component= {New}/> 
       <Route path="/Musics" component= {Music}/>
       <Route path="/Setting" component= {Ssett}/> 
</div>
     </BrowserRouter>
     
 );
}


export default App;
