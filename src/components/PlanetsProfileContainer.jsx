import PlanetsProfile from './PlanetsProfile'
import {connect} from 'react-redux'
import {changeId} from '../redux/charactersReducer'
import {getCharacterInfo,clearData,getPlanetInfo} from '../redux/profileReducer'

const mapStateToProps = (state) => {
    return {
        id: state.characters.id,
        photo: state.characters.photo,
        planetName: state.profile.planetName,
        climate: state.profile.climate,
        rotation: state.profile.rotation,
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