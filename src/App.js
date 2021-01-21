import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import {mainMenuOptions} from './redux/mainMenuOptions'
import {pokemons} from './redux/pokemons' 
import {types} from './redux/types' 
import {locations} from './redux/locations'
import {items} from './redux/items' 
import ContentContainer from './components/ContentContainer'
import MainMenu from './components/MainMenu'
import PokemonsProfileContainer from './components/PokemonsProfileContainer';
import TypesProfileContainer from './components/TypesProfileContainer';
import LocationsProfileContainer from './components/LocationsProfileContainer';
import ItemsProfileContainer from './components/ItemsProfileContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/Pokemons/info/:id"
        render={(props) => <PokemonsProfileContainer {...props}  />}/>
      <Route exact path="/Types/info/:id"
        render={(props) => <TypesProfileContainer {...props}  />}/>
      <Route exact path="/Locations/info/:id"
        render={(props) => <LocationsProfileContainer {...props}  />}/>
      <Route exact path="/Items/info/:id"
        render={(props) => <ItemsProfileContainer {...props}  />}/>
      <Route exact path="/Pokemons"
        render={(props) => pokemons.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Pokemons"} folder="pokemonImg" />)}/>
      <Route exact path="/Types"
        render={(props) => types.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Types"} folder="typeImg"/>)}/>
      <Route exact path="/Locations"
        render={(props) => locations.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Locations"} folder="locationImg"/>)}/>
      <Route exact path="/Items"
        render={(props) => items.map(m => <ContentContainer {...props} name={m.name} key={m.id} id={m.id} photo={m.photo} type={"Items"} folder="itemImg"/>)}/>
      <Route exact path="/"
        render={(props) => mainMenuOptions.map(m => <MainMenu {...props} name={m.name} key={m.id} id={m.id} photo={m.photo}/>)}/>
    </div>
  );
}

export default App;
