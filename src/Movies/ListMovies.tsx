import * as React from 'react';
import Axios from 'axios';
import './movies.css'
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import Button from '../shared/Button';
import { GlobalContext, IContext } from '../Context/Context';
import { IMovie } from '../interface/IMovie';
import { ENDPOINT } from '../shared/api';
import { config } from '../Register/Login';

type PropsListMovies = {
    isAuth: boolean;
}

const ListMovies: React.FC<PropsListMovies> = ({isAuth } : PropsListMovies) => {
    
    const { store, setStore } = React.useContext(GlobalContext) as IContext;

    const [moviesRI7, setMoviesRI7] = React.useState<null | []>(null);

    let navigate = useNavigate();

    const [err, setErr] = React.useState("");

    const API_KEY = '6954861898bd5fd71e3f9befcd21e7fe';
    const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    const getMovies = () => {
        Axios
        .get(URL)
        .then(response => setStore({...store, movies : response.data.results}))
        .catch(err => setErr(err))   
    };

    const getMoviesFromRI7 = () => {
        Axios
        .get(`${ENDPOINT}/api/movies`, config)
        .then(response => setMoviesRI7(response.data))
        .catch(err => setErr(err))       
    };

    const goToMovie = (movie : IMovie) => {
        navigate(`/movies/${movie.id}`);
    };

    const deleteMovie = (movieIdToDelete: number) => {
        const updatedMovies = store.movies?.filter(movie => movie.id != movieIdToDelete);
        if (updatedMovies != null)
        {
            setStore({...store, movies : updatedMovies})
        }
    };

    React.useEffect(() => {
        if (isAuth)
        {
            getMovies(); // SAVE IN CONTEXT
            getMoviesFromRI7(); // SAVE LOCAL STATE
        }
        else
        {
            navigate('/');
        }
    }, []);

    React.useEffect(() => {
        if (moviesRI7 != null && store.movies != null)
        {
            const tempArray = [...store.movies];
            moviesRI7.map(movie => tempArray.push(movie));
            setStore({...store, movies : tempArray});            
        }
    }, [moviesRI7]);

  return (
    <div className='container-list'>
        <Button
            label='STORE MOVIES'
            click={() => console.log(store.movies)}
            active={true}
        
        />
        {store.movies != null ? 
            store.movies.map((movie: IMovie, index: number) => {
            return (
                <div key={movie.id}>
                    <MovieCard 
                        {...movie} 
                        goToMovie={() => goToMovie(movie)}
                        isCustom={movie.isCustom != null}
                    />
                    <Button 
                        label='Supprimer'
                        active={true}
                        click={() => deleteMovie(movie.id)}
                    />
                </div>
            )})
        : 
            <p>Films en cours de chargement...</p>
        } 
    </div>
  )
}

export default ListMovies;