import React,{useEffect} from 'react'
import loading from '../img/loadingGif.gif'

const FilmsProfile = ({title, id, photo, episodeId, getFilmInfo, clearData, director, releaseDate, charactersArr}) => {
    useEffect(() => {
        getFilmInfo(id)
    
        return function willUnmount() {
            clearData()
        };
      },[]);

        return (
            <div className="profile">
                <div>
                    <img className="mainPhoto" alt={title} src={photo} />
                </div>
                <div className="characterInfo">
                    {title &&<p>Title: {title}</p>}
                    {episodeId &&<p>Episode №: {episodeId}</p>}
                    {director &&<p>Director: {director}</p>}
                    {releaseDate && <p>Release Data: {releaseDate}</p>}
                    {charactersArr ? <p><b>Characters:</b></p> : <img className="loading" src={loading} />}
                    {charactersArr && charactersArr.map((ch,index) => {return <p key={index}>{ch}</p>})}
                </div>
            </div>
        )
}

export default FilmsProfile