import CharactersProfile from './CharactersProfile'
import {connect} from 'react-redux'
import {getCharacterInfo,clearData} from '../redux/charactersReducer'

const mapStateToProps = (state) => {
    return {
        id: state.data.id,
        photo: state.data.photo,
        name: state.profile.name,
        height: state.profile.height,
        mass: state.profile.mass,
        gender: state.profile.gender,
        hairColor: state.profile.hairColor,
        homeworld: state.profile.homeworld,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCharacterInfo: (id) => {
            dispatch(getCharacterInfo(id));
        },
        clearData: () => {
            dispatch(clearData());
        },
    }
}

const CharactersProfileContainer = connect(mapStateToProps, mapDispatchToProps)(CharactersProfile)
export default CharactersProfileContainer;