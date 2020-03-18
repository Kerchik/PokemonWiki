import CharactersProfile from './CharactersProfile'
import {connect} from 'react-redux'
import {getCharacterInfo,clearData} from '../redux/charactersReducer'

const mapStateToProps = ({data, profile}) => {
    return {
        id: data.id,
        photo: data.photo,
        name: profile.name,
        height: profile.height,
        mass: profile.mass,
        gender: profile.gender,
        hairColor: profile.hairColor,
        homeworld: profile.homeworld,
    }
}

const CharactersProfileContainer = connect(mapStateToProps, {getCharacterInfo, clearData})(CharactersProfile)
export default CharactersProfileContainer;