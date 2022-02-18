import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register/Register';
import ListMovies from './Movies/ListMovies';
import Header from './shared/Header';
import Login from './Register/Login';
import MovieDetail from './Movies/MovieDetail';

const Router = () => {

    const [isAuth, setIsAuth] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/movies' element={ <ListMovies 
                                                        isAuth={isAuth} 
                                                        setSelectMovie={setSelectedMovie} 
                                                /> } />
                <Route path='/movies/:id' element={<MovieDetail selectedMovie={selectedMovie} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;