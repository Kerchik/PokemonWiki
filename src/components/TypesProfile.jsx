import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

const TypesProfile = ({name, photo, getTypeInfo, id, clearData, moveDamageClass, pokemonArr}) => {
    const images = require.context('../img', true);
    let img = images('./typeImg/' + photo);
    useEffect(() => {
        getTypeInfo(id)
    
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
                    {moveDamageClass && <p>Damage Class: {moveDamageClass}</p>}
                    {pokemonArr ? <p><b>Pokemons:</b></p> : <img className="loading" alt={name} src={loading} />}
                    {pokemonArr && pokemonArr.map((poke,index) => {return <p key={index}>{poke}</p>})}
                </div>
            </div>
        )
}

export default TypesProfile