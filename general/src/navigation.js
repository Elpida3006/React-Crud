// import React, { Suspense, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {  Routes, Route, Redirect } from "react-router-dom";
// import { lazy } from "react";
import AllMovies from "./AllMovies";
import Search from './page-components/Search/Search';
import Details from './page-components/Details/Details';

// const AllMovies = lazy(() => import('./AllMovies'));
// const Details = lazy(() => import('./page-components/Details/Details'));

function Navigation() {
  return (
    <Router>
   {/* <Suspense fallback={<h2>Please wait.....</h2>}> */}
      <Routes> 
          <Route path="/" exact element={<AllMovies/>} />
          <Route path="/search" exact element={<Search/>} />
            <Route path="/movies/movie-title/:id"  element={<Details/>  }/>
            {/* <Route path="/movies/movies-title/:id"  element={<Details/> }/> */}

         {/* <Route path="/products/:category" exact component={AllMovies} /> */}
          </Routes>
        {/* </Suspense> */}
        </Router>
    //home with list all favorite products - have to models products
    ///search - filter + (add) to favorite or (remove) from favorite
    //movies/movie-title(details page of)
  );
}
export default Navigation;
