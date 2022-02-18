import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register/Register';
import ListMovies from './Movies/ListMovies';
import Header from './shared/Header';
import Login from './Register/Login';

const Router = () => {

    const [isAuth, setIsAuth] = useState(false);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Login 
                                            isAuth={isAuth} 
                                            setIsAuth={setIsAuth} 
                                        />} />
                <Route path='/register' element={<Register />} />
                <Route 
                    path='/movies' 
                    element={
                        <ListMovies 
                            isAuth={isAuth} 
                        />
                    } 
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;