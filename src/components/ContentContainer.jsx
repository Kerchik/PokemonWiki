import Content from './Content'
import {connect} from 'react-redux'
import {changeId, changePhoto} from '../redux/charactersReducer'


const mapDispatchToProps = (dispatch) => {
    return {
        changeId: (newId) => {
            dispatch(changeId(newId));
        },
        changePhoto: (newPhoto) => {
            dispatch(changePhoto(newPhoto));
        }
    }
}

const ContentContainer = connect(null, mapDispatchToProps)(Content)
export default ContentContainer;