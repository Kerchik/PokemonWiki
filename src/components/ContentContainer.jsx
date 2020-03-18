import Content from './Content'
import {connect} from 'react-redux'
import {changeId, changePhoto} from '../redux/dataReducer'

const ContentContainer = connect(null, {changeId, changePhoto})(Content)
export default ContentContainer;