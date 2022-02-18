import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import './movie.css'

const Movie = (props) => {

    const imageDuFilm = props.poster_path;
    const imageURL = `https://image.tmdb.org/t/p/original/${imageDuFilm}`

  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <p>Date de sortie : {props.release_date} </p>
        <p>Description : {props.overview}</p>
        <img alt={props.title} src={imageURL} />
    </div>
  )
}

export default Movie;