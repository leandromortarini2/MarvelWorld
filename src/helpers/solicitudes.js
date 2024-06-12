import axios from "axios";

const CHARACTERS_URL = window.REACT_APP_CHARACTERS_URL;
// const COMIC_URL = window.REACT_APP_COMIC_URL;
// const COMIC_URL = window.REACT_APP_COMIC_URL;

export const getCharacters = async () => {
  const response = await axios.get(CHARACTERS_URL);
  const data = response.data;
  const data2 = data.data;
  return data2;
};

export const getComics = async () => {
  const response = await axios.get(
    "https://gateway.marvel.com:443/v1/public/comics?apikey=6befdc4f61d8d18049afbdc7742e7f71"
  );
  const data = response.data;
  const data2 = data.data;
  return data2;
};
