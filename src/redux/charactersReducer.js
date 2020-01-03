const CHANGE_ID = "CHANGE_ID"
const CHANGE_PHOTO = "CHANGE_PHOTO"

let initialState = {
    id: "",
    photo: ""
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ID: {
            return {...state, id: action.id}
        }
        case CHANGE_PHOTO: {
            return {...state, photo: action.photo}
        }
        default:
            return state
    }
}

export const changeId = (id) => ({type: CHANGE_ID, id})
export const changePhoto = (photo) => ({type: CHANGE_PHOTO, photo})

export default charactersReducer;