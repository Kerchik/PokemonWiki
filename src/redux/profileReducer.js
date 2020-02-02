const CHANGE_DATA = "CHANGE_DATA"
const CLEAR_DATA = "CLEAR_DATA"
const SET_HOMEWORLD = "SET_HOMEWORLD"
const SET_PLANET = "SET_PLANET"
const SET_FILMS_TITLES = "SET_FILMS_TITLES"

let initialState = {
    name: null,
    planetName: null,
    height: null,
    mass: null,
    hairColor: null,
    gender: null,
    homeworld: null,
    climate: null,
    rotation: null,
    population: null,
    filmsTitlesArr: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DATA: {
            return {
                ...state, 
                name: action.name,
                height: action.height,
                mass: action.mass,
                hairColor: action.hairColor,
                gender: action.gender,
            }
        }
        case SET_PLANET: {
            return {
                ...state, 
                planetName: action.planetName,
                climate: action.climate,
                rotation: action.rotation,
                population: action.population
            }
        }
        case SET_HOMEWORLD: {
            return {
                ...state, 
                homeworld: action.homeworld
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
                name: null,
                planetName: null,
                height: null,
                mass: null,
                hairColor: null,
                gender: null,
                homeworld: null,
                climate: null,
                rotation: null,
                population: null,
                filmsTitlesArr: null
            }
        }
        default:
            return state
    }
}

export const changeData = (name,height,mass,hairColor,gender) => ({type: CHANGE_DATA, name,height,mass,hairColor,gender})
export const setPlanet = (planetName,rotation,climate,population) => ({type: SET_PLANET, planetName,rotation,climate,population})
export const setHomeworld = (homeworld) => ({type: SET_HOMEWORLD, homeworld})
export const setFilmsTitles = (filmsArr) => ({type: SET_FILMS_TITLES, filmsArr})
export const clearData = () => ({type: CLEAR_DATA})

export const getCharacterInfo = (id) => (dispatch) => {
    api.get(id)
    .then(response => {
        response.text()
        .then(data => {
            let json = JSON.parse(data);
            dispatch(changeData(json.name,json.height,json.mass,json.hair_color,json.gender))
            dispatch(getHomeworld(json.homeworld))
        })
    }
    )
}
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
export const getHomeworld = (id) => (dispatch) => {
    api.getRef(id)
    .then(response => {
        response.text()
        .then(data => {
            let json = JSON.parse(data);
            dispatch(setHomeworld(json.name))
            
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

const api = {
    get(id) {
        return fetch(`https://swapi.co/api/people/${id}`)
    },
    getRef(ref) {
        return fetch(ref)
    },
    getPlanet(id) {
        return fetch(`https://swapi.co/api/planets/${id}`,{method:"POST"})
    }
}

export default profileReducer;