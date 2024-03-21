import React, { useContext, useEffect } from 'react';
import './HomeBody.css';
import fetchMovies from '../../api/fetchMovies';
import AppContext from '../../context/AppContext';
import MovieCard from '../MovieCard/MovieCard';

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
            <MovieCard key = {movie.imdbID} data = {{Title: movie.Title, Year: movie.Year, Poster: movie.Poster, imdbID: movie.imdbID}}/>
          )
        )}
      </div>
    </div>
  );
}

export default HomeBody;
