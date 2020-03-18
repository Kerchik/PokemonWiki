import {api} from './api'

const CLEAR_DATA = "CLEAR_DATA"
const SET_STARSHIP = "SET_STARSHIP"

const initialState = {
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

const setStarship = (starshipName,manufacturer,cost,crew,passengers,starshipClass) => ({type: SET_STARSHIP, starshipName,manufacturer,cost,crew,passengers,starshipClass})
export const clearData = () => ({type: CLEAR_DATA})

export const getStarshipInfo = (id) => (dispatch) => {
    api.getStarship(id)
    .then(response => {
        response.text()
        .then(data => {
            const {name,manufacturer,cost_in_credits,crew,passengers,starship_class} = JSON.parse(data);
            dispatch(setStarship(name,manufacturer,cost_in_credits,crew,passengers,starship_class))
        })
    }
    )
}

export default starshipsReducer;