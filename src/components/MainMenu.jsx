import React,{useState} from "react"
import '../App.css';
import {NavLink} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

const MainMenu = ({name, photo, id}) => {
    const [isHidden, setIsHidden] = useState(true)

    const textAppear = () => {
        setIsHidden(false)
    }
    const textDissapear = () => {
        setIsHidden(true)
    }
    return (
        <div className="card" onMouseOver={textAppear} onMouseOut={textDissapear}>
            <NavLink to={name}>
                <img className="transform" alt={name} src={photo} id={id}/>
                <TransitionGroup timeout={0}>
                    {!isHidden && <CSSTransition timeout={0} classNames="option"><div className="onHoverText">{name}</div></CSSTransition>}
                </TransitionGroup>
            </NavLink>
        </div>
    )
}

export default MainMenu