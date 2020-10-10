import React from 'react';
import './SearchBar.scss';

function SearchBar(props) {
    return(
        <div className="search-bar-container">
            <form onSubmit={props.getSearch} className="searchForm">
                <input className = "searchBar" type="text" value={props.search} onChange={props.updateSearch} placeholder=" Enter Movie Title Here"/>
                <button className = "searchBtn" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;