import {api} from './api'

const SET_CHARACTER = "SET_CHARACTER"
const CLEAR_DATA = "CLEAR_DATA"
const SET_HOMEWORLD = "SET_HOMEWORLD"


const initialState = {
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

const setCharacter = (name,height,mass,hairColor,gender) => ({type: SET_CHARACTER, name,height,mass,hairColor,gender})
const setHomeworld = (homeworld) => ({type: SET_HOMEWORLD, homeworld})
export const clearData = () => ({type: CLEAR_DATA})

export const getCharacterInfo = (id) => (dispatch) => {
    api.getCharacter(id)
    .then(response => {
        response.text()
        .then(data => {
            const {name, height, mass, hair_color, gender, homeworld} = JSON.parse(data);
            dispatch(setCharacter(name, height, mass, hair_color, gender))
            dispatch(getHomeworld(homeworld))
        })
    }
    )
}

const getHomeworld = (ref) => (dispatch) => {
    api.getRef(ref)
    .then(response => {
        response.text()
        .then(data => {
            const {name} = JSON.parse(data);
            dispatch(setHomeworld(name))
        })
    }
    )
}

export default charactersReducer;