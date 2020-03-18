import FilmsProfile from './FilmsProfile'
import {connect} from 'react-redux'
import {getFilmInfo,clearData} from '../redux/filmsReducer'

const mapStateToProps = ({data, films}) => {
    return {
        id: data.id,
        photo: data.photo,
        title: films.title,
        episodeId: films.episodeId,
        director: films.director,
        releaseDate: films.releaseDate,
        charactersArr: films.filmCharactersArr
        
    }
}

const FilmsProfileContainer = connect(mapStateToProps, {getFilmInfo, clearData})(FilmsProfile)
export default FilmsProfileContainer;