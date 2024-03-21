import React, {  useContext,useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import './Search.css';
import fetchMovies from '../../api/fetchMovies';
import AppContext from '../../context/AppContext';
function Search () {

  const [search, setSearch] = useState('');
  const {setMovies} = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    if(search !== '') {
      const movies = await fetchMovies(search);
      setMovies(movies);
    }
  };


  return ( 
    <form className="search-bar" >
      <input 
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        type="search"
        placeholder="Buscar por filme"
        className= "search__input"
      />
      <button type="submit" className="search__button" onClick={handleSearch}> 
        <BsSearch/>
      </button>
    </form>
    
  );
}

export default Search;

