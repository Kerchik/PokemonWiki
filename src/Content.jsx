import React,{useState} from "react"
import './App.css';
import {NavLink} from 'react-router-dom'
import {store} from './store'


const Content = (props) => {
    let click = () => {
        store.id = props.id
        store.photo = props.photo
    }
    return (
        <div className="card" onClick={click}>
            <NavLink to="/info">
                <img className="transform" src={props.photo} id={props.id}/>
            </NavLink>
        </div>
    )
}

export default Content