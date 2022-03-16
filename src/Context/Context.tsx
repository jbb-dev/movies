import * as React from 'react';

const defaultValue = {
    theme: 'light',
    data: null
} 

interface IContext {
    theme: string;
    data: null | [];
}

interface Props {
    children: any
}

export const GlobalContext = React.createContext<IContext>(defaultValue);

const ContextProvider: React.FC<Props> = ({children}) => {

    const [store, setStore] = React.useState<IContext>(defaultValue);

    return (
        <GlobalContext.Provider value={store}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;