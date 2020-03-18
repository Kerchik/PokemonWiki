import PlanetsProfile from './PlanetsProfile'
import {connect} from 'react-redux'
import {clearData,getPlanetInfo} from '../redux/planetsReducer'

const mapStateToProps = ({data, planets}) => {
    return {
        id: data.id,
        photo: data.photo,
        planetName: planets.planetName,
        climate: planets.climate,
        rotation: planets.rotation,
        population: planets.population,
        filmsTitlesArr: planets.filmsTitlesArr
    }
}

const PlanetsProfileContainer = connect(mapStateToProps,{getPlanetInfo, clearData})(PlanetsProfile)
export default PlanetsProfileContainer;