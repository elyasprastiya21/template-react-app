import axios from "axios";

export const getCharacterApi = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/berry");
  return response.data;
};
