import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

const StarshipsProfile = ({starshipName, getStarshipInfo, clearData, id, photo, manufacturer, cost, crew, passengers, starshipClass }) => {
    useEffect(() => {
        getStarshipInfo(id)
    
        return function willUnmount() {
            clearData()
        };
      },[]);

        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={starshipName} src={photo} />
                </div>
                <div className="characterInfo">
                    {starshipName ? <p>Name: {starshipName}</p> : <img className="loading" src={loading} />}
                    {manufacturer &&<p>Manufacturer: {manufacturer}</p>}
                    {cost &&<p>Cost: {cost}</p>}
                    {crew &&<p>Crew: {crew}</p>}
                    {passengers &&<p>Passengers: {passengers}</p>}
                    {starshipClass &&<p>Starship class: {starshipClass}</p>}
                </div>
            </div>
        )
}

export default StarshipsProfile