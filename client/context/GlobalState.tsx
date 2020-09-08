import * as React from 'react';
import { createContext, useReducer } from 'react';
import AppReducer, { initalState } from './AppReducer';

// Create Context
export const GlobalContext = createContext(initalState);

// GlobalProvider Props
interface IGlobalProviderProps {
  children: any;
}

// Provider Component
export const GlobalProvider: React.FC<IGlobalProviderProps> = ({
  children
}) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  return (
    <GlobalContext.Provider value={{ data: state.data }}>
      {children}
    </GlobalContext.Provider>
  );
};
