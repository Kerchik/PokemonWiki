import ItemsProfile from './ItemsProfile'
import {connect} from 'react-redux'
import {clearData,getItemInfo} from '../redux/itemsReducer'

const mapStateToProps = ({data, items}) => {
    return {
        id: data.id,
        photo: data.photo,
        itemName: items.itemName,
        cost: items.cost,
        shortEffect: items.shortEffect,
    }
}

const ItemsProfileContainer = connect(mapStateToProps,{getItemInfo, clearData})(ItemsProfile)
export default ItemsProfileContainer;