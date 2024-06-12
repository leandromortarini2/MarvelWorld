import crypto from "crypto-js";

const publicKey = "6befdc4f61d8d18049afbdc7742e7f71";
const privateKey = "your_private_key"; // Reemplaza esto con tu clave privada

// Función para crear el hash MD5
export const createHash = (timestamp) => {
  return crypto.MD5(timestamp + privateKey + publicKey).toString();
};
