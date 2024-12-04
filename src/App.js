import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useState,useEffect } from "react";

import moviesReducer from "./state/reducers/moviesReducer";

import MoviePage from "./pages/MoviePage";

let store = createStore(moviesReducer);

const API_MOVIES =`https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

// const API_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`

// const IMG_PATH = `https://image.tmdb.org/t/p/w300`

function App() {

const[movie,setMymovie]=useState([])

const[movie2,setMymovie2]=useState([])
useEffect(
()=>{
 fetch(API_MOVIES).then(res=>res.json()).then(
  data=>{
    console.log(data)
    setMymovie(data.results)}
).catch(err=>console.error(err))
}
,[])


// useEffect()
// {
// ()=>{fetch(API_MOVIE).then(resp1=>resp1.json()).then(data1=>setMymovie2(data1))}
// }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <MoviePage value={movie} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
