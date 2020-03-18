import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

const CharactersProfile = ({name, id, getCharacterInfo, clearData, photo, height, mass, hairColor, gender, homeworld}) => {
    useEffect(() => {
        getCharacterInfo(id)
    
        return function willUnmount() {
            clearData()
        };
      },[]);

        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={name} src={photo} />
                </div>
                <div className="characterInfo">
                    {name &&<p>Name: {name}</p>}
                    {height &&<p>Height: {height}</p>}
                    {mass &&<p>Mass: {mass}</p>}
                    {hairColor &&<p>Hair Color: {hairColor}</p>}
                    {gender &&<p>Gender: {gender}</p>}
                    {homeworld 
                    ? <p>Homeworld: {homeworld}</p>
                    : <img className="loading" src={loading} />}
                </div>
            </div>
        )
}

export default CharactersProfile