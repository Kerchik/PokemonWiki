import {api} from './api'

const CLEAR_DATA = "CLEAR_DATA"
const SET_FILM = "SET_FILM"

let initialState = {
    title: null,
    episodeId: null,
    director: null,
    releaseDate: null
}

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILM: {
            return {
                ...state, 
                title: action.title,
                episodeId: action.episode_id,
                director: action.director,
                releaseDate: action.release_date
            }
        }
        case CLEAR_DATA: {
            return {
                ...state, 
                title: null,
                episodeId: null,
                director: null,
                releaseDate: null
            }
        }
        default:
            return state
    }
}

export const setFilm = (title,episode_id,director,release_date) => ({type: SET_FILM, title,episode_id,director,release_date})
export const clearData = () => ({type: CLEAR_DATA})


export const getFilmInfo = (id) => (dispatch) => {
    api.getFilm(id)
    .then(response => {
        response.text()
        .then(data => {
            let json = JSON.parse(data);
            dispatch(setFilm(json.title,json.episode_id,json.director,json.release_date))
        })
    }
    )
}


export default filmsReducer;