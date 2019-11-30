import React,{useState} from "react"
import './App.css';
import {NavLink} from 'react-router-dom'
import {store} from './store'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

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
                <img className="transform" alt={props.name} src={props.photo} id={props.id}/>
                <TransitionGroup timeout={0}>
                    {!isHidden && <CSSTransition timeout={0} classNames="option"><div className="onHoverText">{props.name}</div></CSSTransition>}
                </TransitionGroup>
            </NavLink>
        </div>
    )
}

export default Content