import React from 'react'

class PlanetsProfile extends React.Component {
    componentDidMount() {
        this.props.getPlanetInfo(this.props.id)
    }
    componentWillUnmount() {
        this.props.clearData()
    }
    render() {
        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={this.props.planetName} src={this.props.photo} />
                </div>
                <div className="characterInfo">
                    {this.props.planetName &&<p>Name: {this.props.planetName}</p>}
                    {this.props.rotation &&<p>Rotation period: {this.props.rotation}</p>}
                    {this.props.climate &&<p>Climate: {this.props.climate}</p>}
                    {this.props.population &&<p>Population: {this.props.population}</p>}
                    {this.props.filmsTitlesArr &&<p><b>Films:</b></p>}
                    {this.props.filmsTitlesArr && this.props.filmsTitlesArr.map((film,index) => {return <p key={index}>{film}</p>})}

                </div>
            </div>

        )
}
}

export default PlanetsProfile