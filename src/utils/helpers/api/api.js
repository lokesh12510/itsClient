import axios from 'axios';
import * as constants from '../../constants/constants'

// Set config defaults when creating the instance
const instance = axios.create({
   baseURL: constants.constants.baseURL,
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = 'Bearer ' + '';

instance.interceptors.request.use((config) => {
   const token = localStorage.getItem('token');
   if(token && token !== null)
   {
      config.headers['Authorization'] = 'Bearer ' + token;
   }
   return config;
}, (error) => {
   return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
   return response;
}, (error) => {
   if(error.response && error.response.status)
   {
      const resStatus = error.response.status;
      if(resStatus === 401 || resStatus === 403)
      {
         localStorage.clear();
         return window.location.href = "/Login";
      }
   }
   return Promise.reject(error);
});

export default instance;