import StarshipsProfile from './StarshipsProfile'
import {connect} from 'react-redux'
import {clearData,getStarshipInfo} from '../redux/starshipsReducer'

const mapStateToProps = (state) => {
    return {
        id: state.data.id,
        photo: state.data.photo,
        starshipName: state.starships.starshipName,
        manufacturer: state.starships.manufacturer,
        cost: state.starships.cost,
        crew: state.starships.crew,
        passengers: state.starships.passengers,
        starshipClass: state.starships.starshipClass
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearData: () => {
            dispatch(clearData())
        },
        getStarshipInfo: (id) => {
            dispatch(getStarshipInfo(id))
        }
        
    }
}

const StarshipsProfileContainer = connect(mapStateToProps, mapDispatchToProps)(StarshipsProfile)
export default StarshipsProfileContainer;