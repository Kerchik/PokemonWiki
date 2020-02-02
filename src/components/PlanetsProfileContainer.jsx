import PlanetsProfile from './PlanetsProfile'
import {connect} from 'react-redux'
import {clearData,getPlanetInfo} from '../redux/profileReducer'

const mapStateToProps = (state) => {
    return {
        id: state.characters.id,
        photo: state.characters.photo,
        planetName: state.profile.planetName,
        climate: state.profile.climate,
        rotation: state.profile.rotation,
        population: state.profile.population,
        filmsTitlesArr: state.profile.filmsTitlesArr
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPlanetInfo: (id) => {
            dispatch(getPlanetInfo(id));
        },
        clearData: () => {
            dispatch(clearData())
        }
        
    }
}

const PlanetsProfileContainer = connect(mapStateToProps, mapDispatchToProps)(PlanetsProfile)
export default PlanetsProfileContainer;