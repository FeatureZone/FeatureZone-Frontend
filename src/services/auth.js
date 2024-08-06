import { apiClient, clearDetails } from "./config";

export const apiSignup = async(payload) => {
    return apiClient.post("/auth/signup", payload); 
};

export const apiLogin = async(payload) => {
    return apiClient.post("/auth/token", payload); 
};

export const apiLogout = async () => {
    clearDetails();
};
