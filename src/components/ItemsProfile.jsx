import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

const ItemsProfile = ({id ,photo, itemName, cost, shortEffect, getItemInfo, clearData}) => {
    const images = require.context('../img', true);
    let img = images('./itemImg/' + photo);
    useEffect(() => {
        getItemInfo(id)
    
        return function willUnmount() {
            clearData()
        };
      },[]);

        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={itemName} src={img} />
                </div>
                
                <div className="characterInfo">
                    {itemName && <p>Name: {itemName}</p>}
                    {cost && <p>Cost: {cost}</p>}
                    {shortEffect ? <p>Effect: {shortEffect}</p> : <img src={loading} className="loading"/>}
                </div>
            </div>
        )
}

export default ItemsProfile