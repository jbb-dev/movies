import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './movie.css'
import { useParams } from 'react-router-dom';


const MovieDetail = () => {

    const [detail, setDetail] = useState(null);

    let params = useParams();

    const API_KEY = '6954861898bd5fd71e3f9befcd21e7fe';
    const MOVIE_ID = params.id;

    const imageDuFilm = detail?.poster_path;
    const imageURL = `https://image.tmdb.org/t/p/original/${imageDuFilm}`

    const URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}`;

    const getMovieDetails = () => {
        Axios
            .get(URL)
            .then(res => setDetail(res.data))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return (
        <div className='container-card'>
            {detail != null ?
                <div className='card'>
                    <h2>{detail.original_title}</h2>
                    <p>Date de sortie : {detail.release_date} </p>
                    <p>Description : {detail.overview}</p>
                    <img alt={detail.title} src={imageURL} />
                </div>
            : 
                <p>Please waiting for loading...</p>
            }
        </div>
    )
}

export default MovieDetail;