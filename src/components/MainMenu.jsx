import React,{useState} from "react"
import '../App.css';
import {NavLink} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from 'react-transition-group'


const MainMenu = (props) => {
    let [isHidden, setIsHidden] = useState(true)
    let click = () => {
        //props.changeId(props.id);
        //props.changePhoto(props.photo);
    }
    let textAppear = () => {
        setIsHidden(false)
    }
    let textDissapear = () => {
        setIsHidden(true)
    }
    return (
        <div className="card" onClick={click} onMouseOver={textAppear} onMouseOut={textDissapear}>
            <NavLink to={props.name}>
                <img className="transform" alt={props.name} src={props.photo} id={props.id}/>
                <TransitionGroup timeout={0}>
                    {!isHidden && <CSSTransition timeout={0} classNames="option"><div className="onHoverText">{props.name}</div></CSSTransition>}
                </TransitionGroup>
            </NavLink>
        </div>
    )
}

export default MainMenu