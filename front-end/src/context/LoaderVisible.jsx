import React, { useState, createContext } from "react";

export const LoaderVisible = createContext();

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  return (
    <LoaderVisible.Provider
      value={{ isLoading, setIsLoading, lat, setLat, long, setLong }}
    >
      {children}
    </LoaderVisible.Provider>
  );
};

export default LoaderProvider;
