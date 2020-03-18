import {api} from './api'

const CLEAR_DATA = "CLEAR_DATA"
const SET_PLANET = "SET_PLANET"
const SET_FILMS_TITLES = "SET_FILMS_TITLES"

const initialState = {
    planetName: null,
    climate: null,
    rotation: null,
    population: null,
    filmsTitlesArr: null,
}

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANET: {
            return {
                ...state, 
                planetName: action.planetName,
                climate: action.climate,
                rotation: action.rotation,
                population: action.population
            }
        }
        case SET_FILMS_TITLES: {
            return {
                ...state, 
                filmsTitlesArr: action.filmsArr
            }
        }
        case CLEAR_DATA: {
            return {
                ...state, 
                planetName: null,
                climate: null,
                rotation: null,
                population: null,
                filmsTitlesArr: null,
            }
        }
        default:
            return state
    }
}

const setPlanet = (planetName,rotation,climate,population) => ({type: SET_PLANET, planetName,rotation,climate,population})
const setFilmsTitles = (filmsArr) => ({type: SET_FILMS_TITLES, filmsArr})
export const clearData = () => ({type: CLEAR_DATA})


export const getPlanetInfo = (id) => (dispatch) => {
    api.getPlanet(id)
    .then(response => {
        response.text()
        .then(data => {
            const {name,rotation_period,climate,population, films} = JSON.parse(data);
            dispatch(setPlanet(name,rotation_period,climate,population))
            dispatch(getFilms(films))
        })
    }
    )
}

const getFilms = (films) => (dispatch) => {
    let filmsTitles = []
    let filmsUrl = []
        api.getRef(`https://swapi.co/api/films`)
        .then(response => {
            response.text()
            .then(data => {
                const {results} = JSON.parse(data);
                for (let i=0;i<results.length;i++) {
                    if (films.includes(results[i].url)) {
                        filmsUrl.push(results[i].url)
                    }
                }
            }).then(() => {
                for (let i =0;i<filmsUrl.length;i++) {
                api.getRef(filmsUrl[i])
                .then(response => {
                    response.text()
                    .then(data => {
                        const {title} = JSON.parse(data);
                        filmsTitles.push(title)
                    })
                    .then(() => {
                        if (filmsTitles.length === filmsUrl.length) {
                            dispatch(setFilmsTitles(filmsTitles))
                        }
                    })
                })
                }
            })
        }
        )
}

export default planetsReducer;