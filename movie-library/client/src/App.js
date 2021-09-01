import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import _ from 'underscore';
import './styles/style.scss';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/movies').then(response => {
      console.log('RESPONSE: ', response.data);
      setMoviesList(response.data);
    });
  }, []);

  const handleSubmit = () => {
    Axios.post('http://localhost:3001/api/insert/movie', {
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

  return (
    <main className='bg-dark py-5' style={{ height: '100%' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <form className='card bg-white card-body' onSubmit={handleSubmit}>
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

          <div className='col-md-6 bg-white'>
            {moviesList.map(movie => {
              return (
                <div key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <p>{movie.rating}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
