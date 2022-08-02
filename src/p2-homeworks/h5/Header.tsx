import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './pages/Header.module.css'
{/*activeClassName={classes.active}*/}
function Header() {
    return (
        <div className={classes.container}>
                <NavLink to={'/pre-junior'} className={classes.pre_jun}>pre-junior</NavLink>
                <NavLink to={'/junior'} className={classes.jun}>junior</NavLink>
                <NavLink to={'/junior+'} className={classes.jun_plus}>junior+</NavLink>
        </div>
    )
}

export default Header
