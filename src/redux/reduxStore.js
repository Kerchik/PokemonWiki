import {createStore, combineReducers} from "redux"
import charactersReducer from "./charactersReducer"


let reducers = combineReducers({
    characters: charactersReducer
})

let store = createStore(reducers)
window.store = store;
export default store;