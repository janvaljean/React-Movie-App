import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Main = () => {
  const {movies,loading} = useContext(MovieContext)
  console.log(movies)
  return (
     <div>
    {loading&&<div>Loading</div>}
    <div className="flex justify-center flex-wrap">
      {movies.map(movie => <MovieCard key={movie.id} {...movie}/>)}

    </div>
  
  </div>
  )
 
};

export default Main;
