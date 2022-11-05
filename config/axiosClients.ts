import axios from "axios";

const URL = process.env.NEWS_API_BASE_URL;
const KEY = process.env.NEWS_API_KEY

export const get = async (apiURL: string, params?: any) => {
  console.log(KEY)
    return axios.get(`${URL}/${apiURL}&apiKey=${KEY}`, {
      params,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
  };