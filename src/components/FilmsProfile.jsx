import React from 'react'

class FilmsProfile extends React.Component {
    componentDidMount() {
        this.props.getFilmInfo(this.props.id)
    }
    componentWillUnmount() {
        this.props.clearData()
    }
    
    render() {
        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={this.props.title} src={this.props.photo} />
                </div>
                <div className="characterInfo">
                    {this.props.title &&<p>Title: {this.props.title}</p>}
                    {this.props.episodeId &&<p>Episode №: {this.props.episodeId}</p>}
                    {this.props.director &&<p>Director: {this.props.director}</p>}
                    {this.props.releaseDate &&<p>Release Data: {this.props.releaseDate}</p>}
                </div>
            </div>

        )
}
}

export default FilmsProfile