import {api} from './api'

const CLEAR_DATA = "CLEAR_DATA"
const SET_STARSHIP = "SET_STARSHIP"

let initialState = {
    starshipName: null,
    manufacturer: null,
    cost: null,
    crew: null,
    passengers: null,
    starshipClass: null,
        
}

const starshipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STARSHIP: {
            return {
                ...state, 
                starshipName: action.starshipName,
                manufacturer: action.manufacturer,
                cost: action.cost,
                crew: action.crew,
                passengers: action.passengers,
                starshipClass: action.starshipClass,
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
                starshipName: null,
                manufacturer: null,
                cost: null,
                crew: null,
                passengers: null,
                starshipClass: null,
            }
        }
        default:
            return state
    }
}

export const setStarship = (starshipName,manufacturer,cost,crew,passengers,starshipClass) => ({type: SET_STARSHIP, starshipName,manufacturer,cost,crew,passengers,starshipClass})
export const clearData = () => ({type: CLEAR_DATA})

export const getStarshipInfo = (id) => (dispatch) => {
    api.getStarship(id)
    .then(response => {
        response.text()
        .then(data => {
            let json = JSON.parse(data);
            dispatch(setStarship(json.name,json.manufacturer,json.cost_in_credits,json.crew,json.passengers,json.starship_class))
        })
    }
    )
}

export default starshipsReducer;