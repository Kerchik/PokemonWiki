import PlanetsProfile from './PlanetsProfile'
import {connect} from 'react-redux'
import {clearData,getPlanetInfo} from '../redux/planetsReducer'

const mapStateToProps = (state) => {
    return {
        id: state.data.id,
        photo: state.data.photo,
        planetName: state.planets.planetName,
        climate: state.planets.climate,
        rotation: state.planets.rotation,
        population: state.planets.population,
        filmsTitlesArr: state.planets.filmsTitlesArr
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