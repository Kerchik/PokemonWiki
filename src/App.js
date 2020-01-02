import React from 'react';
import Content from './Content'
import './App.css';
import ProfileContainer from './ProfileContainer';
import {Route} from 'react-router-dom'
import Header from './Header.jsx'
import {characters} from './map'
import ContentContainer from './ContentContainer'

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
