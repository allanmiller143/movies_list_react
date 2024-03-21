import React, { useContext, useEffect } from 'react';
import './HomeBody.css';
import fetchMovies from '../../api/fetchMovies';
import AppContext from '../../context/AppContext';

function HomeBody() {
  
  const {movies, setMovies} = useContext(AppContext);

  useEffect(() => {
    fetchMovies('all').then((response) => {
      setMovies(response);
    });
    
  },[]);


  return (
    <div className="homeBody">
      <h2 className="homeBody__title">
        Melhores filmes
      </h2>
      <div className="homeBody__movies">
        {movies.map(
          (movie) => (
            <div className="movie" key = {movie.id}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default HomeBody;
