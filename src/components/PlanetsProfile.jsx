import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

const PlanetsProfile = ({planetName, photo, getPlanetInfo, id, clearData, rotation, climate, population, filmsTitlesArr}) => {
    useEffect(() => {
        getPlanetInfo(id)
    
        return function willUnmount() {
            clearData()
        };
      },[]);

        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={planetName} src={photo} />
                </div>
                
                <div className="characterInfo">
                    {planetName &&<p>Name: {planetName}</p>}
                    {rotation &&<p>Rotation period: {rotation}</p>}
                    {climate &&<p>Climate: {climate}</p>}
                    {population &&<p>Population: {population}</p>}
                    {filmsTitlesArr ? <p><b>Films:</b></p> : <img className="loading" src={loading} />}
                    {filmsTitlesArr && filmsTitlesArr.map((film,index) => {return <p key={index}>{film}</p>})}
                </div>
            </div>
        )
}

export default PlanetsProfile