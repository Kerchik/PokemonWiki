import TypesProfile from './TypesProfile'
import {connect} from 'react-redux'
import {clearData,getTypeInfo} from '../redux/typesReducer'

const mapStateToProps = ({data, types}) => {
    return {
        id: data.id,
        photo: data.photo,
        name: types.name,
        moveDamageClass: types.moveDamageClass,
        pokemonArr: types.pokemonArr
        
    }
}

const TypesProfileContainer = connect(mapStateToProps,{getTypeInfo, clearData})(TypesProfile)
export default TypesProfileContainer;