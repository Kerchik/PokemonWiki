import Content from './Content'
import {connect} from 'react-redux'
import {changeId, changePhoto} from '../redux/charactersReducer'


const mapStateToProps = (state) => {
    
    return {
        
        //idd: state.characters.id,
        
    }
}
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

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)
export default ContentContainer;