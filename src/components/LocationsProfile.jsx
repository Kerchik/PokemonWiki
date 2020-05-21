import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

const LocationsProfile = ({id ,photo, locationName, regionName, areasArr, otherNamesArr, getLocationInfo, clearData}) => {
    const images = require.context('../img', true);
    let img = images('./locationImg/' + photo);
    useEffect(() => {
        getLocationInfo(id)
    
        return function willUnmount() {
            clearData()
        };
      },[]);

        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={locationName} src={img} />
                </div>
                
                <div className="characterInfo">
                    {locationName && <p>Name: {locationName}</p>}
                    {regionName &&<p>Region: {regionName}</p>}
                    {otherNamesArr && <p><b>Other names:</b></p>}
                    {otherNamesArr && otherNamesArr.map((name,index) => {return <p key={index}>{name}</p>})}
                    {areasArr ? <p><b>Areas:</b></p> : <img className="loading" src={loading} />}
                    {areasArr && areasArr.map((area,index) => {return <p key={index}>{area}</p>})}
                </div>
            </div>
        )
}

export default LocationsProfile