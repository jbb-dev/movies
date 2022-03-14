import * as React from 'react';
import './movie.css';

type MovieCardProps = {
    poster_path: string;
    goToMovie: () => void;
    title: string;
    release_date: Date | string,
}

const MovieCard: React.FC<MovieCardProps> = (props) => {

    const imageDuFilm = props.poster_path;
    const imageURL = `https://image.tmdb.org/t/p/original/${imageDuFilm}`

  return (
        <div className='card' onClick={props.goToMovie}>
            <h2>{props.title}</h2>
            <p>Date de sortie : {props.release_date} </p>
            <img alt={props.title} src={imageURL} />
        </div>
  );
};

export default MovieCard;