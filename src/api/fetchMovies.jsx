// essa função faz uma consulta na api do mercado livre e retorna os dados
const fetchMovies = async (query) => { // aqui é bem parecido com o dart, la é o Future, aqui é esse fetch

  const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4f7ff084&s=${query}`);
  const data = await response.json();
  return data.Search;

};

export default fetchMovies;
