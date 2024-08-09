import apiClient from '../config';

// Get the list of followers for the current user
export const getFollowers = async () => {
    try {
        const response = await apiClient.get('/users/followers');
        return response.data;
    } catch (error) {
        console.error('Error fetching followers list:', error);
        throw error;
    }
};
