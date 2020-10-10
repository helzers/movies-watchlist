import React from 'react';
import './Movie.scss';

function Movie(props) {
    
    
    const addMovie = e => {
        props.setWatchListMovies([...props.watchListMovies, {title: props.title, image: props.image, desc: props.desc, watched: false, id: props.id}])
        //props.addedAlert();
        props.snackbarOpenHandler();
    }

    var isLongTitle = false;
    var isVeryLongTitle = false;
    if(props.title.length > 20){
        if(props.title.length > 38){
            isVeryLongTitle = true
        }
        else{
            isLongTitle = true;
        }
    }
    
    return(
        <div className="movieContainer">
            <img src={props.image} alt="Movie Poster" />
            <div className={`searchMovieDetails ${isLongTitle ? "long" : ""} ${isVeryLongTitle ? "very" : ""}`}>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
            <div className="movieAddButton">
                <button onClick={addMovie}>Add +</button>
            </div>
        </div>

    );
}

export default Movie;