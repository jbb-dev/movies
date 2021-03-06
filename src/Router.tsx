import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register/Register';
import ListMovies from './Movies/ListMovies';
import Header from './shared/Header';
import Login from './Register/Login';
import MovieDetail from './Movies/MovieDetail';
import Support from './Support';
import Profile from './Profile/Profile';
import ContextProvider from './Context/Context';
import AddMovie from './Movies/AddMovie';


const Router = () => {

    const [isAuth, setIsAuth] = React.useState(false);
    // const [selectedMovie, setSelectedMovie] = useState(null);


    return (
        <BrowserRouter>
            <ContextProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/movies' element={ <ListMovies 
                                                            isAuth={isAuth} 
                                                    /> } />
                    <Route path='/movies/:id' element={<MovieDetail />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/add-movie' element={<AddMovie />} />
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    )
}

export default Router;