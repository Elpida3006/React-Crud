import Layout from "../../components/Layout/Layout";
import MovieCard from "../../components/Search-result-MovieCard/MovieCard";
import style from "./Search.module.css";
import * as service from '../../services/productService';
import { useEffect, useState } from 'react';

function Search() {
  const [movies, setMovies] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setsearchResults] = useState({

  });
  const result =[]
  const handleChange = e => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
     Object.entries(movies).map(k => {
      k.filter(m => {

        for (const [key, value] of Object.entries(m)) {
          if (key == 'title' && value == e.target.value) {

            console.log(`${key}: ${value}`);
            console.log(m);
            result.push(m)
          }
        }

      })

    })

console.log(result);

    setsearchResults(result)

    // console.log(result )
  };
  useEffect(() => {
    service.getAll()
      .then(productsParams => {
        setMovies(productsParams);
      });
  }, []);

  return (

    <Layout>
      <main>
        <div className={style["Search__Container"]}>
          <h1>Search</h1>
          <div className={style["Header__Search"]}>
            <input
              className={style["Header__Input"]}
              placeholder="Search by Movie Title.."
              type="text"
              value={searchTerm}
              onChange={handleChange}
              name="searchProduct"

            />
            <button className={style["Header__btn"]} >Search</button>
          </div>
          {(searchResults.length) ? 
              searchResults.map(c =>
                  <MovieCard key={c.id} {...c} />
                  )
                  :
               (   (movies.length) ?
                  movies.map(c =>
                    <MovieCard key={c.id} {...c} />
                  ) : 
                  <div>No Movies</div>
            ) 

          }
        </div>
      </main>
    </Layout>
  );
}

export default Search;
