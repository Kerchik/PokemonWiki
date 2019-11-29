import React from 'react';
import Content,{id} from './Content'
import logo from './sw.png';
import './App.css';
import Profile from './Profile';
import {Route,NavLink} from 'react-router-dom'
import Header from './Header.jsx'
import {characters} from './map'

function App() {
  
  return (
    
    <div className="App">
      
      <Header />
      <Route exact path="/"
        render={(props) => characters.map(m => <Content {...props} name={m.name} key={m.id} id={m.id} photo={m.photo}/>)}/>  
      <Route path="/info"
        render={(props) => <Profile {...props}  />}/>
     
      
    </div>
  );
}

export default App;
