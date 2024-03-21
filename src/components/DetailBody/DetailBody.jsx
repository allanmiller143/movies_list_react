import React from 'react';
import './DetailBody.css';
import {useState, useEffect} from 'react';
import fetchMovieDetail from '../../api/fetchMovieDetail';
import propTypes from 'prop-types';

function DetailBody({data}){
  const {title} = data;
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetchMovieDetail(title).then((Response)=>{
      setMovieDetails(Response);
    });
  },[]);



  return (

    <div className="detailBody">
      <img src={movieDetails.Poster} alt="Imagem do filme" className="detailBody__img"/>
      <div className="detailBody__content">
        <h1 className="detailBody__title">
          {movieDetails.Title}
        </h1>
        <p className="detailBodyElement year">
          <b className="detailBodyElement__title">lançamento:</b> {movieDetails.Released}
        </p>
        <p className="detailBodyElement genre">

          <b className="detailBodyElement__title">genero: </b> {movieDetails.Genre}
        </p>
        <p className="detailBodyElement plot">
          <b className="detailBodyElement__title">decrição:</b> {movieDetails.Plot}
        </p>
        <p className="detailBodyElement runtime">
          <b className="detailBodyElement__title">tempo de duração:</b> {movieDetails.Runtime}
        </p>
        <p className="detailBodyElement director">
          <b className="detailBodyElement__title">diretor:</b> {movieDetails.Director}
        </p>
        <p className="detailBodyElement actors">
          <b className="detailBodyElement__title">Atores:</b> {movieDetails.Actors}
        </p>
      </div>
    </div>
  );
}

export default DetailBody;

DetailBody.propTypes = {
  data : propTypes.shape({})
}.isRequired;
