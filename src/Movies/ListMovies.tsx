import * as React from 'react';
import Axios from 'axios';
import './movies.css'
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import Button from '../shared/Button';

type PropsListMovies = {
    isAuth: boolean;
}

interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: any;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number
}

const ListMovies: React.FC<PropsListMovies> = ({isAuth } : PropsListMovies) => {

    const token = sessionStorage.getItem('token');

    let navigate = useNavigate();

    const [data, setData] = React.useState<IMovie[] | null>(null);
    const [err, setErr] = React.useState("");

    const API_KEY = '6954861898bd5fd71e3f9befcd21e7fe';
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    const getMovies = () => {
        Axios
        .get(URL)
        .then(response => setData(response.data.results))
        .catch(err => setErr(err))   
    };

    const goToMovie = (movie : IMovie) => {
        navigate(`/movies/${movie.id}`);
    };

    const deleteMovie = (movieIdToDelete: number) => {
        const updatedMovies = data?.filter(movie => movie.id != movieIdToDelete);
        if (updatedMovies != null)
        {
            setData(updatedMovies);
        }
    };

    const getMyProfile = () => {
        console.log('get My profile')
        const config = {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
        };
        Axios
        .get('https://api-ri7.herokuapp.com/api/users/profile', config)
        .then(res => console.log('REsponse = ', res))
        .catch(err => console.log(err))
    }

    React.useEffect(() => {
        console.log('useEffect List movies')
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
            label='Get My Profile'
            active={true}
            click={getMyProfile}
        />
        {data != null ? 
            data.map((movie: IMovie, index: number) => {
            return (
                <div key={movie.id}>
                    <MovieCard 
                        {...movie} 
                        goToMovie={() => goToMovie(movie)}
                    />
                    <Button 
                        label='Supprimer'
                        active={true}
                        click={() => deleteMovie(movie.id)}
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