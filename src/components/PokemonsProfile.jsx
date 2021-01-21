import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'
import {pokemons} from '../redux/pokemons'

const PokemonsProfile = ({name, weight, height, photo, abilitiesArr, typesArr, locationArr, getPokemonInfo, id, clearData, match}) => {
    const images = require.context('../img', true);
    if (!photo && !id) {
        id = match.params.id
        pokemons.forEach(pokemon => {
            if (pokemon.id == id) {
                photo= pokemon.photo
            }
        })
    }
    let img = images('./pokemonImg/' + photo);
    useEffect(() => {
        getPokemonInfo(id)
    
        return function willUnmount() {
            clearData()
        };
      },[]);

        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={name} src={img} />
                </div>
                
                <div className="characterInfo">
                    {name && <p>Name: {name}</p>}
                    {weight &&<p>Weight: {weight}</p>}
                    {height &&<p>Height: {height}</p>}
                    {abilitiesArr && <p><b>Abilities:</b></p>}
                    {abilitiesArr && abilitiesArr.map((ability,index) => {return <p key={index}>{ability}</p>})}
                    {typesArr && <p><b>Type:</b></p>}
                    {typesArr && typesArr.map((type,index) => {return <p key={index}>{type}</p>})}
                    {locationArr ? <p><b>Locations:</b></p> : <img className="loading" src={loading} />}
                    {locationArr && locationArr.map((loc,index) => {return <p key={index}>{loc}</p>})}
                </div>
            </div>
        )
}

export default PokemonsProfile