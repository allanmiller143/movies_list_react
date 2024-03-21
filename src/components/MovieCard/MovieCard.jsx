import React from 'react';
import propTypes from 'prop-types';
import './MovieCard.css';
import { Link } from 'react-router-dom';
function MovieCard({data}) {

  const {Title, Year, Poster} = data;

  return (
    <div className="movieCard">
      <img src= {Poster} alt="movie" className="movieCard__img"></img>
      <div className="movieCard__content">
        <h3 className="movieCard__title"> {Title}</h3>
        <p className="movieCard__year">{Year}</p>
      </div>  
     
      <Link to={`/details/${encodeURIComponent(Title)}`} className="movieCard__button">
          Ver detalhes
      </Link>
     
    </div>

  );
}

export default MovieCard;

MovieCard.propTypes = {
  data : propTypes.shape({})
}.isRequired;
