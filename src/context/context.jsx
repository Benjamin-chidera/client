import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const BASE_URL = "http://localhost:3000/api/v1/inspection";



 
  return (
    <AppContext.Provider value={{ BASE_URL }}>
      {children}
    </AppContext.Provider>
  );
};
