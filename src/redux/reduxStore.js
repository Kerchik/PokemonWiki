import {createStore, combineReducers, applyMiddleware} from "redux"
import dataReducer from "./dataReducer"
import thunkMiddleware from 'redux-thunk'
import pokemonsReducer from "./pokemonsReducer";
import typesReducer from './typesReducer';
import locationsReducer from './locationsReducer';


const reducers = combineReducers({
    data: dataReducer,
    pokemons: pokemonsReducer,
    types: typesReducer,
    locations: locationsReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store;