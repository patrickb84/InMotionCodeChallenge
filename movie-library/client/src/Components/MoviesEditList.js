import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import _ from 'underscore';

const MoviesEditList = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [title, setTitle] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/movies').then(response => {
      console.log('RESPONSE: ', response.data);
      setMoviesList(response.data);
    });
  }, []);

  const handleSubmitMovie = () => {
    Axios.post('http://localhost:3001/api/movies', {
      title,
      year,
      rating,
      poster,
    }).then(result => {
      const movie = {
        id: result.data.newId,
        title,
        year,
        rating,
        poster,
      };
      setMoviesList([...moviesList, { ...movie }]);
    });
  };

  const handleUpdateMovie = id => {
    const movieRef = _.findWhere(moviesList, { id });
    console.log(movieRef);

    const movieUpdate = {
      title: updateTitle ?? movieRef.title,
      year: movieRef.year,
      rating: movieRef.rating,
      poster: movieRef.poster,
      id,
    };

    Axios.put('http://localhost:3001/api/movies', {
      ...movieUpdate,
    });

    _.extend(_.findWhere(moviesList, { id }), { ...movieUpdate });
    setMoviesList([...moviesList]);
  };

  const handleDeleteMovie = id => {
    Axios.delete(`http://localhost:3001/api/movies/${id}`);
    setMoviesList(moviesList.filter(movie => movie.id === id));
  };

  return (
    <main className='bg-dark py-5' style={{ height: '100%' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <form
              className='card bg-white card-body'
              onSubmit={handleSubmitMovie}>
              <div className='mb-3'>
                <label>Title</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label>Year</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={e => setYear(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label>Rating</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={e => setRating(e.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>

          <div className='col-md-6'>
            {moviesList.map(movie => {
              return (
                <div className='card card-body bg-white mb-3' key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <p>{movie.rating}</p>
                  <div>
                    <input
                      type='text'
                      onChange={e => setUpdateTitle(e.target.value)}
                    />
                  </div>
                  <button
                    className='btn btn-primary'
                    onClick={() => handleUpdateMovie(movie.id)}>
                    Update
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDeleteMovie(movie.id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoviesEditList;
