import React, { useEffect,useState } from 'react';
import './HomeBody.css';

import fetchMovies from '../../api/fetchMovies';

function HomeBody() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies('all').then((response) => {
      setMovies(response);
    });
    
  },[]);


  return (
    <div className="homeBody">
      {
        movies.map(
          (movie) => (
            <div className="movie" key = {movie.id}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          )
        )}
    </div>
  );
}

export default HomeBody;
