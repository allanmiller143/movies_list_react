import React from 'react';
import propTypes from 'prop-types';

function MovieCard({data}) {

  const {Title, Year, Poster} = data;

  return (
    <div className="movieCard">
      <img src="" alt="movie" className="movieCard__img"> {Poster}</img>
      <div className="movieCard__content">
        <h3 className="movieCard__title"> {Title}</h3>
        <p className="movieCard__year">{Year}</p>
      </div>  
      <button className="movieCard__button" type="submit" onClick={() => {}} >
      </button>
    </div>

  );
}

export default MovieCard;

MovieCard.propTypes = {
  data : propTypes.shape({})
}.isRequired;
