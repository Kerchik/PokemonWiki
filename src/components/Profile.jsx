import React from 'react'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            height: "",
            mass: "",
            hairColor: "",
            gender: "",
            homeworld: ""
        }
        this.homeworld = this.homeworld.bind(this)
    }
    homeworld(world) {
        fetch(world)
        .then(data => {
            data.text()
            .then(data2 => {
                let json = JSON.parse(data2);
                this.setState({
                    homeworld: json.name
                });
            })
        })
    }
    componentDidMount() {
        fetch(`https://swapi.co/api/people/${this.props.id}`)
        .then(data => {
            data.text()
            .then(data2 => {
                let json = JSON.parse(data2);
                this.setState({
                    name: json.name,
                    height: json.height,
                    mass: json.mass,
                    hairColor: json.hair_color,
                    gender: json.gender
                });
                this.homeworld(json.homeworld)
            })
        })
    }
    
    render() {
        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={this.state.name} src={this.props.photo} />
                </div>
                <div className="characterInfo">
                    {this.state.name &&<p>Name: {this.state.name}</p>}
                    {this.state.height &&<p>Height: {this.state.height}</p>}
                    {this.state.mass &&<p>Mass: {this.state.mass}</p>}
                    {this.state.hairColor &&<p>Hair Color: {this.state.hairColor}</p>}
                    {this.state.gender &&<p>Gender: {this.state.gender}</p>}
                    {this.state.homeworld && <p>Homeworld: {this.state.homeworld}</p>}
                </div>
            </div>

        )
}
}

export default Profile