import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'


let CharactersProfile = (props) => {
    useEffect(() => {
        props.getCharacterInfo(props.id)
    
        return function willUnmount() {
            props.clearData()
        };
      },[]);


        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={props.name} src={props.photo} />
                </div>
                <div className="characterInfo">
                    {props.name &&<p>Name: {props.name}</p>}
                    {props.height &&<p>Height: {props.height}</p>}
                    {props.mass &&<p>Mass: {props.mass}</p>}
                    {props.hairColor &&<p>Hair Color: {props.hairColor}</p>}
                    {props.gender &&<p>Gender: {props.gender}</p>}
                    {props.homeworld 
                    ? <p>Homeworld: {props.homeworld}</p>
                    : <img className="loading" src={loading} />}
                </div>
            </div>

        )
}

export default CharactersProfile