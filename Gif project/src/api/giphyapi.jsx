import api from "./api";

const GIPHY_BASE_URL = "https://api.giphy.com/v1/gifs/";
const DEFAULT_PARAMS = {
  api_key:
    "UBwZnmlk5k3JjjJrRoG6Wu8lUsXDRZmw" /* process.env.REACT_APP_GIPHY_API_KEY */,
  limit: 42,
};
export const fetchTrendingGiphys = () => {
  return api.get("trending", {
    baseURL: GIPHY_BASE_URL,
    params: DEFAULT_PARAMS,
  });
};
/* export const fetchReactionGiphys = () => {
  return api.get("reaction", {
    baseURL: GIPHY_BASE_URL,
    params: DEFAULT_PARAMS,
  });
}; */
export const fetchSearchGiphys = (query) => {
  return api.get("search", {
    baseURL: GIPHY_BASE_URL,
    params: {
      ...DEFAULT_PARAMS,
      q: query,
    },
  });
};
