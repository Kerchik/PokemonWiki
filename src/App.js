import React from 'react';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import {Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import {characters} from './redux/characters'
import ContentContainer from './components/ContentContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/"
        render={(props) => characters.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo}/>)}/>  
      <Route path="/info"
        render={(props) => <ProfileContainer {...props}  />}/>
    </div>
  );
}

export default App;
