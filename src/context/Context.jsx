/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <AuthContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
