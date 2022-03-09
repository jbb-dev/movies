import React, { useEffect, useReducer, useState } from 'react';
import Axios from 'axios';
import './movies.css'
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import Button from '../shared/Button';


const ACTIONS = {
    ADD_MOVIE : "add_movie",
    DELETE_MOVIE: "delete_movie",
    GET_MOVIES: "get_movies"
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_MOVIE :
            const newMovie = action.payload.newMovie;
            return {...state, data : [newMovie, ...state.data]}
        case ACTIONS.DELETE_MOVIE :
            const movieId = action.payload.movieId;
            return {...state, data : state.data.filter(movie => movie.id != movieId)}   ;
        case ACTIONS.GET_MOVIES:
            const movies = action.payload.movies;
            return {...state, data : movies}
        default:
            break;
    };
};

const ListMovies = ({isAuth }) => {

    let navigate = useNavigate();

    const [err, setErr] = useState("");

    const [movies, dispatch] = useReducer(reducer, { data : [] })

    const API_KEY = '6954861898bd5fd71e3f9befcd21e7fe';
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    const getMovies = () => {
        Axios
        .get(URL)
        .then(response => dispatch({ type: ACTIONS.GET_MOVIES, payload : { movies : response.data.results } }))
        .catch(err => setErr(err))   
    };

    const goToMovie = (movie) => {
        navigate(`/movies/${movie.id}`);
    };

    const deleteMovie = (movieId) => {
        dispatch({ type: ACTIONS.DELETE_MOVIE, payload : { movieId : movieId } });
    };

    const addMovie = () => {
        const newMovie = {
            title: 'New Movie',
            release_date: '12/12/2022',
            goToMovie: null,
            image: 'http://img.over-blog-kiwi.com/0/99/46/17/20140707/ob_d95452_2806004-jaws.jpg'
        };
        dispatch({ type: ACTIONS.ADD_MOVIE, payload : { newMovie : newMovie } });
    };

    useEffect(() => {
        if (isAuth)
        {
            getMovies();
        }
        else
        {
            navigate('/');
        }
    }, []);

  return (
    <div className='container-list'>
        <Button 
            active 
            click={addMovie}
            label='Ajouter un film'
        />
        {movies.data != null ? 
            movies.data.map((movie, index) => {
            return (
                <div key={movie.title}>
                    <MovieCard 
                        {...movie} 
                        goToMovie={() => goToMovie(movie)}
                    />
                    <Button 
                        active
                        click={() => deleteMovie(movie.id)}
                        label='Supprimer'
                    />
                </div> 
            )})   
        : 
            <p>Chargement en cours...</p> 
        }
    </div>
  )
}

export default ListMovies;