import axios from "axios";

const instance = axios.create({
  baseURL: 'https://featurezone-backend-1.onrender.com',
  timeout: 10000,
});

export default instance;


