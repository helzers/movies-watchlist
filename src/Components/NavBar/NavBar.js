import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.scss';

function NavBar(){
    return(
        <header>
            <div className="navbar">
                <nav className="nav-items">
                    <NavLink className="nav-bar-search" activeClassName="active" exact to="/">Search</NavLink>
                    <h1 className="nav-bar-title">MOVIE WATCHLIST</h1>
                    <NavLink className="nav-bar-list" activeClassName="active" to="/list">My List</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;