import CharactersProfile from './CharactersProfile'
import {connect} from 'react-redux'
import {changeId} from '../redux/charactersReducer'
import {getCharacterInfo,clearData} from '../redux/profileReducer'

const mapStateToProps = (state) => {
    return {
        id: state.characters.id,
        photo: state.characters.photo,
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
        changeId: (newPostText) => {
            dispatch(changeId(newPostText));
        },
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