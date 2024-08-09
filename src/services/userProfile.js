import apiClient from '../config';

// Create a new user profile
export const createUserProfile = async (payload) => {
    try {
        const response = await apiClient.post('/userprofile/create', payload);
        return response.data;
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw error;
    }
};

// Update an existing user profile
export const updateUserProfile = async (id, payload) => {
    try {
        const response = await apiClient.patch(`/userprofile/update/${id}`, payload);
        return response.data;
    } catch (error) {
        console.error(`Error updating user profile with ID ${id}:`, error);
        throw error;
    }
};
