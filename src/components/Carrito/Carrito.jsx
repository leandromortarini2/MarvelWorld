/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth } from "../../context/Context";

export const Carrito = () => {
  const { carrito } = useAuth();

  return <div>{carrito}</div>;
};
