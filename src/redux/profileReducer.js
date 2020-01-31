const CHANGE_DATA = "CHANGE_DATA"

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
            return {...state, 
                name: action.name,
                height: action.height,
                mass: action.mass,
                hairColor: action.hairColor,
                gender: action.gender,
                homeworld: action.homeworld,
            }
        }
        default:
            return state
    }
}

export const changeData = (name,height,mass,hairColor,gender,homeworld) => ({type: CHANGE_DATA, name,height,mass,hairColor,gender,homeworld})

export default profileReducer;