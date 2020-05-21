import {api} from './api'

const CLEAR_DATA = "CLEAR_DATA"
const SET_TYPE = "SET_TYPE"

const initialState = {
    name: null,
    moveDamageClass: null,
    pokemonArr: null,
}

const typesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPE: {
            return {
                ...state, 
                name: action.name,
                moveDamageClass: action.moveDamageClass,
                pokemonArr: action.pokemonArr,
            }
        }
        case CLEAR_DATA: {
            return {
                ...state, 
                name: null,
                moveDamageClass: null,
                pokemonArr: null,
            }
        }
        default:
            return state
    }
}

const setType = (name, moveDamageClass, pokemonArr) => ({type: SET_TYPE, name, moveDamageClass, pokemonArr})
export const clearData = () => ({type: CLEAR_DATA})

export const getTypeInfo = (id) => (dispatch) => {
    let pokemonArr = [];
    api.getType(id)
    .then(response => {
        response.text()
        .then(data => {
            const {name, pokemon, move_damage_class} = JSON.parse(data);
            for (let i = 0;i<pokemon.length;i++) {
                if (i===10) break;
                pokemonArr.push(pokemon[i].pokemon.name)
            }
            dispatch(setType(name, move_damage_class.name, pokemonArr));
        })
    }
    )
}

export default typesReducer;