import {createStore, combineReducers, applyMiddleware} from "redux"
import dataReducer from "./dataReducer"
import charactersReducer from "./charactersReducer";
import thunkMiddleware from 'redux-thunk'
import planetsReducer from "./planetsReducer";
import filmsReducer from "./filmsReducer";
import starshipsReducer from "./starshipsReducer";


let reducers = combineReducers({
    data: dataReducer,
    profile: charactersReducer,
    planets: planetsReducer,
    films: filmsReducer,
    starships: starshipsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store;