import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Movie from './Movie';
import './movies.css'
import { useNavigate } from 'react-router-dom';

const ListMovies = ({isAuth}) => {

    let navigate = useNavigate();

    const [data, setData] = useState(null);
    const [err, setErr] = useState("");

    const API_KEY = '6954861898bd5fd71e3f9befcd21e7fe';
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    const getMovies = () => {
        Axios
        .get(URL)
        .then(response => setData(response.data.results))
        .catch(err => setErr(err))   
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
    <div className='container'>
        {data != null ? 
            data.map((movie, index) => <Movie key={movie.id} {...movie} />)    
        : 
            <p>Chargement en cours...</p> 
        }
    </div>
  )
}

export default ListMovies;