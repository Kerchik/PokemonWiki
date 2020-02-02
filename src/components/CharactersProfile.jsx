import React from 'react'

class CharactersProfile extends React.Component {
    componentDidMount() {
        this.props.getCharacterInfo(this.props.id)
    }
    componentWillUnmount() {
        this.props.clearData()
    }
    
    render() {
        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={this.props.name} src={this.props.photo} />
                </div>
                <div className="characterInfo">
                    {this.props.name &&<p>Name: {this.props.name}</p>}
                    {this.props.height &&<p>Height: {this.props.height}</p>}
                    {this.props.mass &&<p>Mass: {this.props.mass}</p>}
                    {this.props.hairColor &&<p>Hair Color: {this.props.hairColor}</p>}
                    {this.props.gender &&<p>Gender: {this.props.gender}</p>}
                    {this.props.homeworld && <p>Homeworld: {this.props.homeworld}</p>}
                </div>
            </div>

        )
}
}

export default CharactersProfile