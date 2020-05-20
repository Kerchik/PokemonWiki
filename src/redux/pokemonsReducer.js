import {api} from './api'

const SET_POKEMON = "SET_POKEMON"
const CLEAR_DATA = "CLEAR_DATA"
const SET_LOCATION = "SET_LOCATION"

const initialState = {
    name: null,
    weight: null,
    height: null,
    abilitiesArr: null,
    typesArr: null,
    locationArr: null
    
}

const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON: {
            return {
                ...state, 
                name: action.name,
                weight: action.weight,
                height: action.height,
                abilitiesArr: action.abilitiesArr,
                typesArr: action.typesArr
            }
        }
        case SET_LOCATION: {
            return {
                ...state, 
                locationArr: action.locationArr.map(el => {
                    return el.split('-').join(' ')
                })
            }
        }
        case CLEAR_DATA: {
            return {
                ...state, 
                name: null,
                weight: null,
                height: null,
                abilitiesArr: null,
                typesArr: null,
                locationArr: null
            }
        }
        default:
            return state
    }
}

const setPokemon = (name, weight, height, abilitiesArr, typesArr) => ({type: SET_POKEMON, name, weight, height, abilitiesArr, typesArr})
const setLocation = (locationArr) => ({type: SET_LOCATION, locationArr})
export const clearData = () => ({type: CLEAR_DATA})

export const getPokemonInfo = (id) => (dispatch) => {
    api.getPokemon(id)
    .then(response => {
        response.text()
        .then(data => {
            const abilArr = [];
            const typesArr = [];
            const {name, weight, height, abilities, types, location_area_encounters} = JSON.parse(data);
            abilities.forEach(element => {
                abilArr.push(element.ability.name);
            });
            types.forEach(element => {
                typesArr.push(element.type.name);
            });
            dispatch(setPokemon(name, weight, height, abilArr, typesArr));
            dispatch(getLocation(location_area_encounters));
        })
    }
    )
}

const getLocation = (ref) => (dispatch) => {
    api.getRef(ref)
    .then(response => {
        response.text()
        .then(data => {
            let locArr = []
            const json = JSON.parse(data);
            if (!json.length) {
                locArr.push('Unknown')
                dispatch(setLocation(locArr))
            } else {
                json.forEach(element => {
                    locArr.push(element.location_area.name)
                })
                dispatch(setLocation(locArr))
            }
        })
    }
    )
}

export default pokemonsReducer;