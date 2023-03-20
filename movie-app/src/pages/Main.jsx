import React, { useContext, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const {movies,loading,getMovies} = useContext(MovieContext)
  console.log(movies)
  const [searchTerm ,setSearchTerm] = useState("")
  function handleSubmit (e){
    e.preventDefault();
    getMovies(SEARCH_API+searchTerm)
  }
  return (
     <div>
     <form className="flex justify-center p-2" onSubmit={handleSubmit}>
      <input type="search"
      className="w-80 h-8 rounded-md p-1 m-2"
      placeholder="Search a movie"
      onChange={(e) => setSearchTerm(e.target.value)} />
      <button type="submit" className="btn-danger-bordered">
        Search
      </button>
     </form>
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
    </div>

  )
 
};

export default Main;
