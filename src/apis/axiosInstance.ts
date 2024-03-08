import axios from "axios";

// axios Instance
const axiosInstance = axios.create({
  headers: {},
  baseURL: "Put url in here",
  timeout: 3000,
});

// setup interceptors
// request
axiosInstance.interceptors.request.use(
  (config) => {
    // Put interceptor option in here
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
// response
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {}
);

export default axiosInstance;
