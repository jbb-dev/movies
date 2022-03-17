import * as React from 'react';
import { IMovie } from '../interface/IMovie';
import { IUser } from '../interface/IUser';
export interface IContext {
    store: IStore;
    setStore: (store : IStore) => void;
}

export interface IStore {
    theme: string;
    movies: null | IMovie[];
    addedMovies: null | [];
    user: IUser | null;
}

interface Props {
    children: any
}


const defaultValue: IStore = {
    theme: 'light',
    movies: null,
    addedMovies: null,
    user: null,
} 

export const GlobalContext = React.createContext<IContext | null>(null);

const ContextProvider: React.FC<Props> = ({children}) => {

    const [store, setStore] = React.useState<IStore>(defaultValue);

    return (
        <GlobalContext.Provider value={{store, setStore}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;