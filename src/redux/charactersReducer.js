import {api} from './api'

const SET_CHARACTER = "SET_CHARACTER"
const CLEAR_DATA = "CLEAR_DATA"
const SET_HOMEWORLD = "SET_HOMEWORLD"


let initialState = {
    name: null,
    height: null,
    mass: null,
    hairColor: null,
    gender: null,
    homeworld: null,
    
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER: {
            return {
                ...state, 
                name: action.name,
                height: action.height,
                mass: action.mass,
                hairColor: action.hairColor,
                gender: action.gender,
            }
        }
        case SET_HOMEWORLD: {
            return {
                ...state, 
                homeworld: action.homeworld
            }
        }
        case CLEAR_DATA: {
            return {
                ...state, 
                name: null,
                height: null,
                mass: null,
                hairColor: null,
                gender: null,
                homeworld: null,
            }
        }
        default:
            return state
    }
}

export const setCharacter = (name,height,mass,hairColor,gender) => ({type: SET_CHARACTER, name,height,mass,hairColor,gender})
export const setHomeworld = (homeworld) => ({type: SET_HOMEWORLD, homeworld})
export const clearData = () => ({type: CLEAR_DATA})

export const getCharacterInfo = (id) => (dispatch) => {
    api.get(id)
    .then(response => {
        response.text()
        .then(data => {
            let json = JSON.parse(data);
            dispatch(setCharacter(json.name,json.height,json.mass,json.hair_color,json.gender))
            dispatch(getHomeworld(json.homeworld))
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

export default charactersReducer;