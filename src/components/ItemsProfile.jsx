import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'
import {items} from '../redux/items'

const ItemsProfile = ({id ,photo, itemName, cost, shortEffect, getItemInfo, clearData, match}) => {
    const images = require.context('../img', true);
    if (!photo && !id) {
        id = match.params.id
        items.forEach(item => {
            if (item.id == id) {
                photo= item.photo
            }
        })
    }
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