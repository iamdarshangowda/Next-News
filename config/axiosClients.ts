import axios from "axios";

//const URL = process.env.NEWS_API_BASE_URL;
//const KEY = process.env.NEWS_API_KEY

export const get = async (apiURL: string, params?: any) => {
    return axios.get(`https://newsapi.org/v2/${apiURL}&apiKey=e2fd75b2212146da803ebae50a500c07`, {
      params,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
  };