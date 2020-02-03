import React from 'react';
import './App.css';
import CharactersProfileContainer from './components/CharactersProfileContainer';
import PlanetsProfileContainer  from './components/PlanetsProfileContainer';
import FilmsProfileContainer  from './components/FilmsProfileContainer';
import StarshipsProfileContainer  from './components/StarshipsProfileContainer';
import {Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import {characters} from './redux/characters'
import {mainMenuOptions} from './redux/mainMenuOptions'
import {planets} from './redux/planets'
import {films} from './redux/films'
import {starships} from './redux/starships'
import ContentContainer from './components/ContentContainer'
import MainMenu from './components/MainMenu'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/Characters"
        render={(props) => characters.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Characters"}/>)}/>  
      <Route exact path="/Characters/info"
        render={(props) => <CharactersProfileContainer {...props}  />}/>
      <Route exact path="/Planets/info"
        render={(props) => <PlanetsProfileContainer {...props}  />}/>
      <Route exact path="/Films/info"
        render={(props) => <FilmsProfileContainer {...props}  />}/>
      <Route exact path="/Starships/info"
        render={(props) => <StarshipsProfileContainer {...props}  />}/>
      <Route exact path="/Planets"
        render={(props) => planets.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Planets"}/>)}/>
      <Route exact path="/Films"
        render={(props) => films.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Films"}/>)}/>
      <Route exact path="/Starships"
        render={(props) => starships.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Starships"}/>)}/>
      <Route exact path="/"
        render={(props) => mainMenuOptions.map(m => <MainMenu {...props} name={m.name} key={m.id} id={m.id} photo={m.photo}/>)}/>
    </div>
  );
}

export default App;
