import Profile from './Profile'
import {connect} from 'react-redux'
import {changeId} from '../redux/charactersReducer'
import {changeData} from '../redux/profileReducer'

const mapStateToProps = (state) => {
    return {
        id: state.characters.id,
        photo: state.characters.photo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeId: (newPostText) => {
            dispatch(changeId(newPostText));
        },
        changeData: (name,height,mass,hairColor,gender,homeworld) => {
            dispatch(changeData(name,height,mass,hairColor,gender,homeworld));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer;