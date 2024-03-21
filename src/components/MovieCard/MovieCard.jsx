import React from 'react';
import propTypes from 'prop-types';
import './MovieCard.css';
import { Link } from 'react-router-dom';
function MovieCard({data}) {

  const {Title, Year, Poster, imdbID} = data;

  const handleSeeDetails = () => {
    alert(
      `Título: ${Title}\nAno: ${Year}\nPoster: ${Poster} \nID: ${imdbID}`
    );
  };

  return (
    <div className="movieCard">
      <img src= {Poster} alt="movie" className="movieCard__img"></img>
      <div className="movieCard__content">
        <h3 className="movieCard__title"> {Title}</h3>
        <p className="movieCard__year">{Year}</p>
      </div>  
      <button className="movieCard__button" type="submit" onClick={() => handleSeeDetails()} >
        <Link to={`/details/${imdbID}`} className="movieCard__button">
          Ver detalhes
        </Link>
      </button>
    </div>

  );
}

export default MovieCard;

MovieCard.propTypes = {
  data : propTypes.shape({})
}.isRequired;
