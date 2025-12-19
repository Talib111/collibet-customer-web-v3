import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL } from './constants';

// ----------------------------------------------------------------------

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
// import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
// import { useRouter } from 'next/router';
// import { BASE_URL } from './constants';

// // ----------------------------------------------------------------------

// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: BASE_URL
// });

// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   (error: AxiosError) => {
    
//     if (!error.response) {
//       // Handle network error (backend connectivity issue)
//       window.location.href = '/error-network' // Redirect to network error page
//       return Promise.reject(); // Return empty promise
//     }

//     // Redirect to error page with status code 500 for other errors
//     // router.push('/error');
//     return Promise.reject(); // Return empty promise
//   }
// );

// export default axiosInstance;
