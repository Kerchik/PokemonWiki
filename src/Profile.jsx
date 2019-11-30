import React from 'react'
import {store} from './store'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            height: "",
            mass: "",
            hairColor: "",
            gender: ""
        }
    }
    componentDidMount() {
        fetch(`https://swapi.co/api/people/${store.id}`)
        .then(data => {
            data.text()
            .then(data2 => {
                let json = JSON.parse(data2);
                this.setState({
                    name: json.name,
                    height: json.height,
                    mass: json.mass,
                    hairColor: json.hair_color,
                    gender: json.gender,
                    
                });
            })
        })
    }
    render() {
        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={this.state.name} src={store.photo} />
                </div>
                <div className="characterInfo">
                    <p>Name: {this.state.name}</p>
                    <p>Height: {this.state.height}</p>
                    <p>Mass: {this.state.mass}</p>
                    <p>Hair Color: {this.state.hairColor}</p>
                    <p>Gender: {this.state.gender}</p>
                </div>
            </div>

        )
}
}

export default Profile