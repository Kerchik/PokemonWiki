import React,{useState} from "react"
import './App.css';
import {NavLink} from 'react-router-dom'
import {store} from './store'


const Content = (props) => {
    let [isHidden, setIsHidden] = useState(true)
    let click = () => {
        store.id = props.id
        store.photo = props.photo
    }
    let textAppear = () => {
        setIsHidden(false)
    }
    let textDissapear = () => {
        setIsHidden(true)
    }
    return (
        <div className="card" onClick={click} onMouseOver={textAppear} onMouseOut={textDissapear}>
            <NavLink to="/info">
                <img className="transform" src={props.photo} id={props.id}/>
                {!isHidden ? <div className="onHoverText">{props.name}</div> : ""}
            </NavLink>
        </div>
    )
}

export default Content