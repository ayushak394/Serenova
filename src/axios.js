import axios from "axios";

// base url to make requestions to the movie database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// Whatever final link we wanna append to the baseURL.
