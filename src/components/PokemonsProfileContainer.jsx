import PokemonsProfile from './PokemonsProfile'
import {connect} from 'react-redux'
import {clearData,getPokemonInfo} from '../redux/pokemonsReducer'

const mapStateToProps = ({data, pokemons}) => {
    return {
        id: data.id,
        photo: data.photo,
        name: pokemons.name,
        weight: pokemons.weight,
        height: pokemons.height,
        abilitiesArr: pokemons.abilitiesArr,
        typesArr: pokemons.typesArr,
        locationArr: pokemons.locationArr
    }
}

const PokemonsProfileContainer = connect(mapStateToProps,{getPokemonInfo, clearData})(PokemonsProfile)
export default PokemonsProfileContainer;