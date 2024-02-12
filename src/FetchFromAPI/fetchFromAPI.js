import axios from "axios";
const BASE_URL = "https://airbnb13.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: {
    page: "1",
    currency: "USD"
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API,
    "X-RapidAPI-Host": "airbnb13.p.rapidapi.com"
  }
};
const fetchFromAPI = async (url) => {
  const { data } = await axios.get(` ${BASE_URL}/${url}`, options);
  return data;
};
export default fetchFromAPI;
