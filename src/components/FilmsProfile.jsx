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
                    {props.title &&<p>Title: {props.title}</p>}
                    {props.episodeId &&<p>Episode №: {props.episodeId}</p>}
                    {props.director &&<p>Director: {props.director}</p>}
                    {props.releaseDate && <p>Release Data: {props.releaseDate}</p>}
                    {props.charactersArr ? <p><b>Films:</b></p> : <img className="loading" src={loading} />}
                    {props.charactersArr && props.charactersArr.map((ch,index) => {return <p key={index}>{ch}</p>})}
                </div>
            </div>

        )
}

export default FilmsProfile