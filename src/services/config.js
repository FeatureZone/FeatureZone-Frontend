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
  const user = {
    token: localStorage.getItem("accessToken"),
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    userName: localStorage.getItem("userName"),
  };
  return user;
};

// Function to clear user details from localStorage
export const clearDetails = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("userName");
};

// Interceptor to add token to Authorization header for every request
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
