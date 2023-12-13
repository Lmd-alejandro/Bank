import React, { createContext, useContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userToken, setUserToken] = useState(null);

  return (
    <DataContext.Provider value={{ userData, setUserData, userToken, setUserToken }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};