import React from 'react';
import './movie.css'

const MovieCard = (props) => {

    const imageDuFilm = props.poster_path;
    const imageURL = `https://image.tmdb.org/t/p/original/${imageDuFilm}`

  return (
      <div className='container-card' onClick={props.goToMovie}>
        <div className='card' onClick={props.goToMovie}>
            <h2>{props.title}</h2>
            <p>Date de sortie : {props.release_date} </p>
            <img alt={props.title} src={props.image ? props.image : imageURL} />
        </div>
    </div>
  );
};

export default MovieCard;