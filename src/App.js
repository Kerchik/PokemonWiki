import React from 'react';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import PlanetsProfileContainer  from './components/PlanetsProfileContainer';
import {Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import {characters} from './redux/characters'
import {mainMenuOptions} from './redux/mainMenuOptions'
import {planets} from './redux/planets'
import ContentContainer from './components/ContentContainer'
import MainMenu from './components/MainMenu'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/Characters"
        render={(props) => characters.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Characters"}/>)}/>  
      <Route exact path="/Characters/info"
        render={(props) => <ProfileContainer {...props}  />}/>
      <Route exact path="/Planets/info"
        render={(props) => <PlanetsProfileContainer {...props}  />}/>
      <Route exact path="/Planets"
        render={(props) => planets.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Planets"}/>)}/>
      <Route exact path="/"
        render={(props) => mainMenuOptions.map(m => <MainMenu {...props} name={m.name} key={m.id} id={m.id} photo={m.photo}/>)}/>
    </div>
  );
}

export default App;
