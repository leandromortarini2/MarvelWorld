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

// COMIC
// COMIC
// COMIC
// COMIC
// COMIC
// COMIC
export const getComics = async (limit = 99) => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
  );
  const data = response.data;
  const data2 = data.data;
  return data2;
};

export const getComicID = async (id) => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );
  const data = response.data;
  const data2 = data.data;
  return data2;
};

export const getComicCreators = async (id) => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics/${id}/creators?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );
  const data = response.data;
  const data2 = data.data;
  return data2;
};

export const getComicCharacters = async (id, limit = 99) => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics/${id}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
  );
  const data = response.data;
  const data2 = data.data;
  return data2;
};

export const getComicEvents = async (id, limit = 99) => {
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/comics/${id}/events?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
  );
  const data = response.data;
  const data2 = data.data;
  return data2;
};

// PERSONAJES
// PERSONAJES
// PERSONAJES
// PERSONAJES
// PERSONAJES
// PERSONAJES

export const getCharacters = async (limit = 99) => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
  );
  const data = response.data;
  const data2 = data.data;
  return data2;
};

export const getCharacterID = async (id) => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );

  const data = response.data;
  const data2 = data.data;

  return data2;
};

export const getCharacterComic = async (id, limit = 99) => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
  );

  const data = response.data;
  const data2 = data.data;
  return data2;
};
export const getCharacterEvents = async (id) => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/events?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );

  const data = response.data;
  const data2 = data.data;
  return data2;
};
export const getCharacterSeries = async (id) => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );

  const data = response.data;
  const data2 = data.data;
  return data2;
};
export const getCharacterStories = async (id) => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${id}/stories?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );

  const data = response.data;
  const data2 = data.data;
  return data2;
};

// SERIES
// SERIES
// SERIES
// SERIES
// SERIES
// SERIES

export const getSeries = async () => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/series?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );

  const data = response.data;
  const data2 = data.data;
  return data2;
};

// EVENTS
// EVENTS
// EVENTS
// EVENTS
// EVENTS
// EVENTS

export const getEvent = async () => {
  const response = await axios.get(
    `https://gateway.marvel.com:443/v1/public/events?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );

  const data = response.data;
  const data2 = data.data;
  return data2;
};
