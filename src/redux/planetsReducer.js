import {api} from './api'

const CLEAR_DATA = "CLEAR_DATA"
const SET_PLANET = "SET_PLANET"
const SET_FILMS_TITLES = "SET_FILMS_TITLES"

let initialState = {
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

export const setPlanet = (planetName,rotation,climate,population) => ({type: SET_PLANET, planetName,rotation,climate,population})
export const setFilmsTitles = (filmsArr) => ({type: SET_FILMS_TITLES, filmsArr})
export const clearData = () => ({type: CLEAR_DATA})


export const getPlanetInfo = (id) => (dispatch) => {
    api.getPlanet(id)
    .then(response => {
        response.text()
        .then(data => {
            let json = JSON.parse(data);
            dispatch(setPlanet(json.name,json.rotation_period,json.climate,json.population))
            dispatch(getFilms(json.films))
            

        })
    }
    )
}

export const getFilms = (films) =>  (dispatch) => {
    let filmsTitles = []
    let filmsUrl = []
        api.getRef(`https://swapi.co/api/films`)
        .then(response => {
            response.text()
            .then(data => {
                let json = JSON.parse(data);
                for (let i=0;i<json.results.length;i++) {
                    if (films.includes(json.results[i].url)) {
                        filmsUrl.push(json.results[i].url)
                        
                    }
                }
            }).then(() => {
                for (let i =0;i<filmsUrl.length;i++) {
                api.getRef(filmsUrl[i])
                .then(response => {
                    response.text()
                    .then(data => {
                        let json = JSON.parse(data);
                        filmsTitles.push(json.title)
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