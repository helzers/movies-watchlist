//Importing packages
import React, { useCallback, useState, useEffect, Fragment } from 'react';

//Importing Styles
import './Search.scss';

//Importing components
import Movie from '../../Components/Movie/Movie.js';
import SearchBar from '../../Components/SearchBar/SearchBar.js';
//import SnackbarAlert from '../../Components/Snackbar/Snackbar.js';


import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function Search(props){

    var API_KEY = '4e3b5358480cc4b8602cf4144f0e7d42';

    /*
     *  Declaring States
     */
    var [movies, setMovies] = useState([]);
    var [search, setSearch] = useState("");
    var [query, setQuery] = useState("");
    var [searchResultsTitle, setSearchResultsTitle] = useState("");
    const [open, setOpen] = useState(false);
    
    /*
     *  Functions
     */
    const getPopularMovies = useCallback( async() => {
        let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`);
        let data = await response.json();
        console.log(data);
        setMovies(data.results);
    }, [API_KEY])
    
    const getSearchMovies = useCallback( async() => {
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        let data = await response.json();
        console.log(data);
        setMovies(data.results);
    }, [API_KEY, query])
    
    const getMovies = useCallback( async() => {
        if(Object.keys(query).length === 0){
          await getPopularMovies();
        }
        else {
          await getSearchMovies();
        }
    },[query, getPopularMovies, getSearchMovies])

    var getSearchTitle = useCallback(() => {
        if(query.length > 0){
          setSearchResultsTitle(`Search Results For: ${query}`);
        }
    }, [query])

    var updateSearch = e => {
      setSearch(e.target.value);
    }

    var getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }

    const snackbarOpenHandler = () => {
        setOpen(true);
    }

    const snackbarCloseHandler = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }
    
    /*
     *  UseEffect 
     */
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    useEffect(() => {
        getMovies();
        getSearchTitle();
    }, [query, getMovies, getSearchTitle]);
    
    return(
        <div className="search-page">
            <SearchBar getSearch={getSearch} search={search} updateSearch={updateSearch} /> 
            
            <h2>{searchResultsTitle}</h2>
            <div className="movieResults">
                {movies.map(movie => (
                    <Movie key={movie.id} id={movie.id} title={movie.title} desc={movie.overview} image={props.imageURL + movie.poster_path} setWatchListMovies={props.setWatchListMovies} watchListMovies={props.watchListMovies} addedAlert={props.addedAlert} snackbarOpenHandler={snackbarOpenHandler}/>
                ))}
            </div>
            <div className="snackbar-alert">
                {/* <SnackbarAlert open={open} setOpen={setOpen}/> */}
                <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} open={open} autoHideDuration={3000} onClose={snackbarCloseHandler}
                message="Movie added to your watch list" action={
                    <Fragment>
                        <IconButton size="small" onClick={snackbarCloseHandler}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Fragment>
                }
                />
            </div>
        </div>
    )
}

export default Search;