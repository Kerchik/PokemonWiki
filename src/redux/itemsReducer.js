import {api} from './api'

const SET_ITEM = "SET_POKEMON"
const CLEAR_DATA = "CLEAR_DATA"

const initialState = {
    itemName: null,
    cost: null,
    shortEffect: null
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEM: {
            return {
                ...state, 
                itemName: action.name.split('-').join(' '),
                cost: action.cost,
                shortEffect: action.shortEffect,
            }
        }
        case CLEAR_DATA: {
            return {
                ...state, 
                itemName: null,
                cost: null,
                shortEffect: null,
            }
        }
        default:
            return state
    }
}

const setItem = (name,cost,shortEffect) => ({type: SET_ITEM, name,cost,shortEffect})
export const clearData = () => ({type: CLEAR_DATA})

export const getItemInfo = (id) => (dispatch) => {
    api.getItem(id)
    .then(response => {
        response.text()
        .then(data => {
            let {name, cost, effect_entries} = JSON.parse(data);
            const shortEffect = effect_entries[0].short_effect
            dispatch(setItem(name, String(cost), shortEffect));
        })
    }
    )
}

export default itemsReducer;