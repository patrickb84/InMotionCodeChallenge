import { useEffect } from 'react';

const MovieCard = ({ movie }) => {
  useEffect(() => console.log(movie), []);
  return (
    <div className='col-md-4 col-lg-3'>
      <div className='card bg-dark mb-3 text-light border-0 mb-5'>
        <img
          src={'https://m.media-amazon.com/images/I/51dZZ4pl-kL._AC_.jpg'}
          alt=''
        />
        <div className='card-body'>
          <div className='d-flex align-items-center justify-content-between'>
            <h3 className='h4'>{movie.title}</h3>
            <p className='m-0'>{movie.year}</p>
          </div>
          <p>{movie.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
