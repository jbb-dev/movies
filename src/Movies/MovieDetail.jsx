import React from 'react';
import './movie.css'

const MovieDetail = (props) => {

    const imageDuFilm = props.selectedMovie.poster_path;
    const imageURL = `https://image.tmdb.org/t/p/original/${imageDuFilm}`

  return (
    <div className='card'>
        <h2>{props.selectedMovie.title}</h2>
        <p>Date de sortie : {props.selectedMovie.release_date} </p>
        <p>Description : {props.selectedMovie.overview}</p>
        <img alt={props.selectedMovie.title} src={imageURL} />
    </div>
  )
}

export default MovieDetail;