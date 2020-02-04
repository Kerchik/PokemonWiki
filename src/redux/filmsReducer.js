import {api} from './api'

const CLEAR_DATA = "CLEAR_DATA"
const SET_FILM = "SET_FILM"
const SET_FILM_CHARACTERS = "SET_FILM_CHARACTERS"

let initialState = {
    title: null,
    episodeId: null,
    director: null,
    releaseDate: null,
    filmCharactersArr: null
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
                releaseDate: null,
                filmCharactersArr: null
            }
        }
        case SET_FILM_CHARACTERS: {
            return {
                ...state, 
                filmCharactersArr: action.charactersArr
            }
        }
        default:
            return state
    }
}

export const setFilm = (title,episode_id,director,release_date) => ({type: SET_FILM, title,episode_id,director,release_date})
export const setFilmCharacters = (charactersArr) => ({type: SET_FILM_CHARACTERS, charactersArr})
export const clearData = () => ({type: CLEAR_DATA})


export const getFilmInfo = (id) => (dispatch) => {
    api.getFilm(id)
    .then(response => {
        response.text()
        .then(data => {
            let json = JSON.parse(data);
            dispatch(setFilm(json.title,json.episode_id,json.director,json.release_date))
            dispatch(getFilmCharacters(json.characters))
        })
    }
    )
}
export const getFilmCharacters = (characters) =>  (dispatch) => {
    let charactersNames = []
    let charactersUrl = []
        api.getRef(`https://swapi.co/api/people`)
        .then(response => {
            response.text()
            .then(data => {
                let json = JSON.parse(data);
                for (let i=0;i<json.results.length;i++) {
                    if (characters.includes(json.results[i].url)) {
                        charactersUrl.push(json.results[i].url)
                    }
                }
            }) .then(() => {
                for (let i =0;i<charactersUrl.length;i++) {
                api.getRef(charactersUrl[i])
                .then(response => {
                    response.text()
                    .then(data => {
                        let json = JSON.parse(data);
                        charactersNames.push(json.name)
                    })
                    .then(() => {
                        if (charactersNames.length === charactersUrl.length) {
                            dispatch(setFilmCharacters(charactersNames))
                        }
                    })
                })
                }
            }) 
        }
        )
}


export default filmsReducer;