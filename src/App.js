//Importing packages
import React, {useCallback, useEffect, useState} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

//Importing Styles
import './App.scss';

//Importing pages
import MyList from './Pages/MyList/MyList.js';
import Search from './Pages/Search/Search.js';

//Importing components
import NavBar from './Components/NavBar/NavBar.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  var API_KEY = '4e3b5358480cc4b8602cf4144f0e7d42';

  /*
  *   Declaring states
  */
  var [imageURL, setImageURL] = useState([]);
  
  var [watchListMovies, setWatchListMovies] = useState([]);
  var [listFilter, setListFilter] = useState("all");
  var [filteredMovies, setFilteredMovies] = useState([]); 

  /*
  *   Functions
  */

  var getConfig = useCallback ( async() => {
    var response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`);
    var data = await response.json();
    console.log(data);
    setImageURL(data.images.secure_base_url + data.images.poster_sizes[6]);
  }, [API_KEY])

  var saveLocalWatchList = useCallback(() => {
    localStorage.setItem("watchListMovies", JSON.stringify(watchListMovies));
  }, [watchListMovies])

  var getLocalWatchList = () => {
    if(localStorage.getItem("watchListMovies") === null) {
      localStorage.setItem("watchListMovies", JSON.stringify([]));
    }
    else {
      let localWatchList = JSON.parse(localStorage.getItem("watchListMovies"));
      setWatchListMovies(localWatchList);
    }
  }

  const filterSwitch = useCallback( () => {
    switch(listFilter){
      case "watched":
        setFilteredMovies(watchListMovies.filter(watchListMovie => watchListMovie.watched === true));
        break;
      case "unwatched":
        setFilteredMovies(watchListMovies.filter(watchListMovie => watchListMovie.watched === false));
        break;
      default:
        setFilteredMovies(watchListMovies);
        break;
    }
  }, [setFilteredMovies, watchListMovies, listFilter])

  /*
  *   All use effect statements
  */
  useEffect(() => {
    getConfig();
    getLocalWatchList();
  }, [getConfig])

  useEffect(() => {
    saveLocalWatchList();
  }, [watchListMovies, saveLocalWatchList])

  useEffect(() => {
    filterSwitch();
  }, [watchListMovies, listFilter, filterSwitch])
  
  return (
    <Router>
      <div className="App">
          <NavBar />
            <div className="main-container">
              <Switch>
                <Route path="/list" exact>
                  <MyList watchListMovies={watchListMovies} setWatchListMovies={setWatchListMovies} setListFilter={setListFilter} filteredMovies={filteredMovies}/>
                </Route>

                <Route path="/" exact>
                  <Search imageURL={imageURL} setWatchListMovies={setWatchListMovies} watchListMovies={watchListMovies} />
                </Route>
              </Switch>

            </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
