import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8080/';

export const axiosInstance = Axios.create({});
