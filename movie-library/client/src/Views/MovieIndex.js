import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import _ from 'underscore';

import MovieCard from '../Components/MovieCard';

const MovieIndex = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/movies').then(response => {
      console.log('RESPONSE: ', response.data);
      setMoviesList(response.data);
    });
  }, []);

  return (
    <main className='bg-dark'>
      <div className='container-fluid py-5'>
        <h1 className='text-white'>MovieIndex</h1>

        <div className='row'>
          {moviesList.map(movie => {
            return <MovieCard movie={{ ...movie }} key={movie.id} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default MovieIndex;
