import * as React from 'react';

export const AppContext = React.createContext({});

type AppContextProviderProps = {
  children: React.ReactNode;
};

export function AppContextProvider({ children }: AppContextProviderProps) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
