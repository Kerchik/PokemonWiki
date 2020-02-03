import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

let StarshipsProfile = (props) => {
    useEffect(() => {
        props.getStarshipInfo(props.id)
    
        return function willUnmount() {
            props.clearData()
        };
      },[]);

        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={props.starshipName} src={props.photo} />
                </div>
                
                <div className="characterInfo">
                    {props.starshipName ? <p>Name: {props.starshipName}</p> : <img className="loading" src={loading} />}
                    {props.manufacturer &&<p>Manufacturer: {props.manufacturer}</p>}
                    {props.cost &&<p>Cost: {props.cost}</p>}
                    {props.crew &&<p>Crew: {props.crew}</p>}
                    {props.passengers &&<p>Passengers: {props.passengers}</p>}
                    {props.starshipClass &&<p>Starship class: {props.starshipClass}</p>}
                   

                </div>
            </div>

        )
}

export default StarshipsProfile