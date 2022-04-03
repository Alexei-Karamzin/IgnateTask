import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './pages/Header.module.css'

function Header() {
    return (
        <div className={classes.dropdown}>
            <button className={classes.dropbtn}>menu</button>
            <div className={classes.dropdown_content}>
                <NavLink to={'/pre-junior'} className={classes.pre_jun}><div></div>pre-junior</NavLink>
                <NavLink to={'/junior'} className={classes.jun}><div></div>junior</NavLink>
                <NavLink to={'/junior+'} className={classes.jun_plus}><div></div>junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
