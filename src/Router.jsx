import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register/Register';
import ListMovies from './Movies/ListMovies';
import Header from './shared/Header';
import Login from './Register/Login';
import MovieDetail from './Movies/MovieDetail';
import { ContextProvider } from './context/Context';

const Router = () => {


    const [isAuth, setIsAuth] = useState(false);
    // const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <BrowserRouter>
            <Header />
            <ContextProvider>
                <Routes>
                    <Route path='/' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/movies' element={ <ListMovies isAuth={isAuth} /> } />
                    <Route path='/movies/:id' element={<MovieDetail />} />
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    )
}

export default Router;