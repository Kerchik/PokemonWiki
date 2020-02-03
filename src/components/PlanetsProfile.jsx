import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

let  PlanetsProfile = (props) => {
    useEffect(() => {
        props.getPlanetInfo(props.id)
    
        return function willUnmount() {
            props.clearData()
        };
      },[]);


        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={props.planetName} src={props.photo} />
                </div>
                
                <div className="characterInfo">
                    {props.planetName &&<p>Name: {props.planetName}</p>}
                    {props.rotation &&<p>Rotation period: {props.rotation}</p>}
                    {props.climate &&<p>Climate: {props.climate}</p>}
                    {props.population &&<p>Population: {props.population}</p>}
                    {props.filmsTitlesArr ? <p><b>Films:</b></p> : <img className="loading" src={loading} />}
                    {props.filmsTitlesArr && props.filmsTitlesArr.map((film,index) => {return <p key={index}>{film}</p>})}

                </div>
            </div>

        )
}

export default PlanetsProfile