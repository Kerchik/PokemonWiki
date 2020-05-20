import LocationsProfile from './LocationsProfile'
import {connect} from 'react-redux'
import {clearData,getLocationInfo} from '../redux/locationsReducer'

const mapStateToProps = ({data, locations}) => {
    return {
        id: data.id,
        photo: data.photo,
        locationName: locations.locationName,
        regionName: locations.regionName,
        areasArr: locations.areasArr,
        otherNamesArr: locations.otherNamesArr,
    }
}

const LocationsProfileContainer = connect(mapStateToProps,{getLocationInfo, clearData})(LocationsProfile)
export default LocationsProfileContainer;