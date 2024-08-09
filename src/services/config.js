
import axios from 'axios';
import { toast } from 'react-toastify';

// Base URL Configuration
const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseUrl,
  // withCredentials: true, // Uncomment if you need to send cookies with requests
});

// Function to get user details from localStorage
export const getDetails = () => {
  return {
    token: localStorage.getItem('accessToken'),
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
    userName: localStorage.getItem('userName'),
  };
};

// Function to clear user details from localStorage
export const clearDetails = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('userName');
};


    export const getDetails = () => {
      const user = {};
    
      user.token = localStorage.getItem("accessToken");
      user.firstName = localStorage.getItem("firstName");
      user.lastName = localStorage.getItem("lastName");
      user.userName = localStorage.getItem("userName");
    
      return user;
    };

    export const clearDetails = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("userName");
    };

//Interceptor to add token to authorization header for every request
apiClient.interceptors.request.use(
  (config) => {
    // Check if there's a token in localStorage
    const { token } = getDetails();
    if (token) {
      // Set the token in the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // If request error (e.g., network failure), handle it here
    return Promise.reject(error);
  }





// Interceptor to add token to the Authorization header for every request
apiClient.interceptors.request.use(
  (config) => {
    const { token } = getDetails();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }

  return config;
},
(error) => {
  // If request error (e.g., network failure), handle it here
  return Promise.reject(error);
}


);

// Interceptor to handle response errors
apiClient.interceptors.response.use(

  (response) => {
    // If a response is received, just return it unchanged
    return response;
  },
  (error) => {

    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        clearDetails();
        window.location.replace('/signin'); // Redirect to sign-in page
      } else if (status === 404) {
        toast.error('Resource not found');
      } else {
        // Handle other specific status codes if needed
      }
    } else {
      // Handle other kinds of errors (e.g., network errors)
      toast.error('An unexpected error occurred. Please try again later.');
    }

    return Promise.reject(error);
  }
);


    // If there's an error in the response (like a 401), handle it here
    if (error.response.status === 401) {
      // remove accessToken from local storage
      clearDetails();
      // Handle 401 error (e.g., logout user and redirect to login page)
      window.location.replace("/signin");
    }
    if (error.response.status === 404) {
      toast.error("Not found");
    }
    // Return the error so the promise is rejected
    return Promise.reject(error);
  }

);

