import React, { useState, createContext } from 'react';

const GlobalContext = createContext(null);

const ContextProvider = ({ children }) => {

    const [store, setStore] = useState({
        theme: 'dark',
        data: null
    });
  
    return (
      <GlobalContext.Provider value={[store, setStore]}>
          {children}
      </GlobalContext.Provider>
    );
  }
  
  export { ContextProvider, GlobalContext, GlobalDispatchContext };