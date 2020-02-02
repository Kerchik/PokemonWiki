import FilmsProfile from './FilmsProfile'
import {connect} from 'react-redux'
import {changeId} from '../redux/dataReducer'
import {getFilmInfo,clearData} from '../redux/filmsReducer'

const mapStateToProps = (state) => {
    return {
        id: state.data.id,
        photo: state.data.photo,
        title: state.films.title,
        episodeId: state.films.episodeId,
        director: state.films.director,
        releaseDate: state.films.releaseDate,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeId: (newPostText) => {
            dispatch(changeId(newPostText));
        },
        getFilmInfo: (id) => {
            dispatch(getFilmInfo(id));
        },
        clearData: () => {
            dispatch(clearData());
        },
    }
}

const FilmsProfileContainer = connect(mapStateToProps, mapDispatchToProps)(FilmsProfile)
export default FilmsProfileContainer;