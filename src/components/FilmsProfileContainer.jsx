import FilmsProfile from './FilmsProfile'
import {connect} from 'react-redux'
import {getFilmInfo,clearData} from '../redux/filmsReducer'

const mapStateToProps = (state) => {
    return {
        id: state.data.id,
        photo: state.data.photo,
        title: state.films.title,
        episodeId: state.films.episodeId,
        director: state.films.director,
        releaseDate: state.films.releaseDate,
        charactersArr: state.films.filmCharactersArr
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
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