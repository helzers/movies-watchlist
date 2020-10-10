import React from 'react';
import './ListItem.scss';

function ListItem(props) {
    
    const deleteItem = () => {
        props.setWatchListMovies(props.watchListMovies.filter((Element) => Element.id !== props.watchListMovie.id))
    }

    const watchedItem = () => {
        props.setWatchListMovies(props.watchListMovies.map((item) => {
            if(item.id === props.watchListMovie.id) {
                return {
                    ...item, watched: !item.watched
                }
            }
            return item;
        }))
    }

    var isMovieWatched = props.watchListMovie.watched;
    
    return(
        
        <div className={`list-item-container ${isMovieWatched ? "watched" : ""}`}>
            <img src={props.watchListMovie.image} alt=""/>
            <div className="movieDetails">
                <h2>{props.watchListMovie.title}</h2>
                <p>{props.watchListMovie.desc}</p>
            </div>
            <div className="movieButtons">
                <button onClick={watchedItem} className="watched-btn">Watched</button>
                <button onClick={deleteItem} className="delete-btn">Delete</button>
            </div>
        </div>
    )
}

export default ListItem;