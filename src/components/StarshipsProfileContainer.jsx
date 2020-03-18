import StarshipsProfile from './StarshipsProfile'
import {connect} from 'react-redux'
import {clearData,getStarshipInfo} from '../redux/starshipsReducer'

const mapStateToProps = ({data, starships}) => {
    return {
        id: data.id,
        photo: data.photo,
        starshipName: starships.starshipName,
        manufacturer: starships.manufacturer,
        cost: starships.cost,
        crew: starships.crew,
        passengers: starships.passengers,
        starshipClass: starships.starshipClass
    }
    
}

const StarshipsProfileContainer = connect(mapStateToProps, {clearData, getStarshipInfo})(StarshipsProfile)
export default StarshipsProfileContainer;