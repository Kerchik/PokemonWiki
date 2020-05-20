import {api} from './api'

const SET_LOCATION = "SET_LOC"
const CLEAR_DATA = "CLEAR_DATA"

const initialState = {
    locationName: null,
    regionName: null,
    areasArr: null,
    otherNamesArr: null,
}

const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION: {
            return {
                ...state, 
                locationName: action.locationName.split('-').join(' '),
                regionName: action.regionName,
                areasArr: action.areasArr.map(el => {
                    return el.split('-').join(' ')
                }),
                otherNamesArr: action.otherNamesArr,
            }
        }
        case CLEAR_DATA: {
            return {
                ...state, 
                locationName: null,
                regionName: null,
                areasArr: null,
                otherNamesArr: null,
            }
        }
        default:
            return state
    }
}

const setLocation = (locationName, regionName, areasArr, otherNamesArr) => ({type: SET_LOCATION, locationName, regionName, areasArr, otherNamesArr})
export const clearData = () => ({type: CLEAR_DATA})

export const getLocationInfo = (id) => (dispatch) => {
    api.getLocation(id)
    .then(response => {
        response.text()
        .then(data => {
            let areasArr = []
            let otherNamesArr = []
            const {name, region, areas, names} = JSON.parse(data)
            areas.forEach(element => {
                areasArr.push(element.name)
            });
            names.forEach(element => {
                otherNamesArr.push(element.name)
            });
            dispatch(setLocation(name, region.name, areasArr, otherNamesArr))
        })
    }
    )
}

export default locationsReducer;