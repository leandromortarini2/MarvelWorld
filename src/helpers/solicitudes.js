import axios from "axios";
import crypto from "crypto-js";

// Claves pública y privada
const publicKey = "6befdc4f61d8d18049afbdc7742e7f71";
const privateKey = "69613d7b5055db6e28f46c1529dcfdc4aef54d7c";

// Timestamp de ejemplo
const timestamp = "1";

// Función para crear el hash md5
export const createHash = (timestamp) => {
  // Concatenar el timestamp, privateKey y publicKey
  const toBeHashed = timestamp + privateKey + publicKey;

  // Crear el hash MD5
  const hash = crypto.MD5(toBeHashed).toString();

  // Retornar el hash
  return hash;
};

// Uso de la función createHash
const hash = createHash(timestamp);

export const getCharacters = async () => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );
  const data = response.data;
  const data2 = data.data;
  return data2;
};

export const getComics = async () => {
  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );
  const data = response.data;
  const data2 = data.data;
  return data2;
};
