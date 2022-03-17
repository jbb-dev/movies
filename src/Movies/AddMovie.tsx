import Axios from 'axios';
import * as React from 'react'
import { IMovie } from '../interface/IMovie'
import Input, { InputDate } from '../Register/Input'
import { config } from '../Register/Login';
import { ENDPOINT } from '../shared/api';
import Button from '../shared/Button';

const AddMovie: React.FC = () => {

    const [newMovie, setNewMovie] = React.useState({
        title: '',
        overview: '',
        release_date: '',
        poster_path: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name;
        const value = event.target.value;
        setNewMovie({...newMovie, [key] : value});
    };

    const saveMovie = () => {
        console.log('save movie')
        Axios
        .post(`${ENDPOINT}/api/movies`, newMovie, config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    return (
        <div>
            <Input
                label='title'
                name='title'
                type='text'
                value={newMovie.title}
                action={handleChange}
            />
            <Input
                label='description'
                name='overview'
                type='text'
                value={newMovie.overview}
                action={handleChange}
            />
            <Input
                type='date'
                label='date de sortie'
                name='release_date'
                value={newMovie.release_date}
                action={handleChange}
            />
            <Input
                label='image du film'
                name='poster_path'
                type='text'
                value={newMovie.poster_path}
                action={handleChange}
            />
            <Button 
                label='Enregistrer'
                active={true}
                click={saveMovie}
            />
        </div>
  )
}

export default AddMovie