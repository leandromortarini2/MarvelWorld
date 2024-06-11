import axios from "axios";

const CHARACTERS_URL = window.REACT_APP_CHARACTERS_URL;

export const getCharacters = async () => {
  const response = await axios.get(CHARACTERS_URL);
  const data = response.data;
  const data2 = data.data;
  return data2;
};
