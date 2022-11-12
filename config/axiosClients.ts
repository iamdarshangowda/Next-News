import axios from "axios";

//const URL = process.env.NEWS_API_BASE_URL;
//const KEY = process.env.NEWS_API_KEY

// export const getNews = async (apiURL: string, params?: any) => {
//     return axios.get(`https://newsapi.org/v2/${apiURL}&apiKey=e2fd75b2212146da803ebae50a500c07`, {
//       params,
//       headers: {
//         "Content-Type": "application/json;charset=UTF-8",
//       },
//     });
//   };

  export const getRealTimeNews = async (apiURL: string, params?: any) => {
    return axios.get(`https://real-time-news-data.p.rapidapi.com/${apiURL}`, {
      params,
      headers: {
        'X-RapidAPI-Key': '614e6b7b53msh82f60b9f55f9633p1e1378jsn052b2a4e2caf',
        'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
      }
    });
  };

  export const getWeather = async (apiURL:string, params?: any) => {
    return axios.get(`https://yahoo-weather5.p.rapidapi.com/${apiURL}`, {
      params,
      headers: {
        'X-RapidAPI-Key': '614e6b7b53msh82f60b9f55f9633p1e1378jsn052b2a4e2caf',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
      }
    });
  };