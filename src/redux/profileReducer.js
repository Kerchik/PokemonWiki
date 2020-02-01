const CHANGE_DATA = "CHANGE_DATA"
const CLEAR_DATA = "CLEAR_DATA"

let initialState = {
    name: "",
    height: "",
    mass: "",
    hairColor: "",
    gender: "",
    homeworld: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DATA: {
            return {
                ...state, 
                name: action.name,
                height: action.height,
                mass: action.mass,
                hairColor: action.hairColor,
                gender: action.gender,
            }
        }
        case CLEAR_DATA: {
            return {
                ...state, 
                name: "",
                height: "",
                mass: "",
                hairColor: "",
                gender: "",
            }
        }
        default:
            return state
    }
}

export const changeData = (name,height,mass,hairColor,gender) => ({type: CHANGE_DATA, name,height,mass,hairColor,gender})
export const clearData = () => ({type: CLEAR_DATA})

export const getCharacterInfo = (id) => (dispatch) => {
    api.get(id)
    .then(response => {
        response.text()
        .then(data => {
            let json = JSON.parse(data);
            dispatch(changeData(json.name,json.height,json.mass,json.hair_color,json.gender))
        })
    }
    )
}

const api = {
    get(id) {
        return fetch(`https://swapi.co/api/people/${id}`)
    }
}

export default profileReducer;