import React from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import {useState} from 'react';

function Provider({children}){
  const [movies, setMovies] = useState([]); // isso vai ser uma lista de produtos, o valor dentro do userState é o valor inicial 


  const value = {
    movies,
    setMovies,
  };

  return (
    <AppContext.Provider value = {value}>
      {children}

    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
