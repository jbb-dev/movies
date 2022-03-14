import * as React from 'react';
import Axios from 'axios';
import './movies.css'
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';

type PropsListMovies = {
    isAuth: boolean;
}

const ListMovies: React.FC<PropsListMovies> = ({isAuth } : PropsListMovies) => {

    let navigate = useNavigate();

    const [data, setData] = React.useState<any | null>(null);
    const [err, setErr] = React.useState("");

    const API_KEY = '6954861898bd5fd71e3f9befcd21e7fe';
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    const getMovies = () => {
        Axios
        .get(URL)
        .then(response => setData(response.data.results))
        .catch(err => setErr(err))   
    };

    const goToMovie = (movie : any) => {
        navigate(`/movies/${movie.id}`);
    };

    React.useEffect(() => {
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
        {data != null ? 
            data.map((movie: any, index: number) => {
            return (
                <MovieCard 
                    key={movie.id} 
                    {...movie} 
                    goToMovie={() => goToMovie(movie)}
                /> 
            )})   
        : 
            <p>Chargement en cours...</p> 
        }
    </div>
  )
}

export default ListMovies;