//Importing packages
import React, {useEffect, useState} from 'react';
import Select from 'react-select';
//import Dropdown from 'react-bootstrap/Dropdown';

//Importing Styles
import './MyList.scss';

//Importing Components
import ListItem from '../../Components/ListItem/ListItem.js'

function MyList({watchListMovies, setWatchListMovies, setListFilter, filteredMovies}) {

    var options = [
        {value: "all", label: "All"},
        {value: "watched", label: "Watched"},
        {value: "unwatched", label: "Unwatched"}
    ]

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    var [selectedOption, setSelectedOption] = useState("all");
    
    return(
        <div className="watch-list-container" >
            <div className="title-select">
                <span className="placeholder-span"> </span>
                <h1>My Watch List</h1>
                <div className="select">

                    <Select className="list-filter-select" value={selectedOption} options={options} defaultValue={options[0].label} 
                        onChange={value => {setSelectedOption(value); setListFilter(value.value)}} />

                </div>
            </div>
            <div className="my-movies">
                {filteredMovies.map(watchListMovie => (
                    <ListItem key={watchListMovie.id} movieTitle={watchListMovie.title} watchListMovies={watchListMovies} watchListMovie={watchListMovie} setWatchListMovies={setWatchListMovies}/>
                ))}
            </div>
        </div >
    );
}

export default MyList;