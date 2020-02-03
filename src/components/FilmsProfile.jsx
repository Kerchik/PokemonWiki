import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

let FilmsProfile = (props) => {
    /* componentDidMount() {
        this.props.getFilmInfo(this.props.id)
    }
    componentWillUnmount() {
        this.props.clearData()
    } */
    useEffect(() => {
        props.getFilmInfo(props.id)
    
        return function willUnmount() {
            props.clearData()
        };
      },[]);


        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={props.title} src={props.photo} />
                </div>
                <div className="characterInfo">
                    {props.title ? <p>Title: {props.title}</p> : <img className="loading" src={loading} />}
                    {props.episodeId &&<p>Episode №: {props.episodeId}</p>}
                    {props.director &&<p>Director: {props.director}</p>}
                    {props.releaseDate && <p>Release Data: {props.releaseDate}</p>}
                </div>
            </div>

        )
}

export default FilmsProfile