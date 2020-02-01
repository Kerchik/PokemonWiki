import Profile from './Profile'
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

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer;