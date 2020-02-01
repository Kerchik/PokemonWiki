import {createStore, combineReducers, applyMiddleware} from "redux"
import charactersReducer from "./charactersReducer"
import profileReducer from "./profileReducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    characters: charactersReducer,
    profile: profileReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;
export default store;