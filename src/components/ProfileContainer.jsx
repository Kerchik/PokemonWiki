import Profile from './Profile'
import {connect} from 'react-redux'
import {changeId} from '../redux/charactersReducer'

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
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer;