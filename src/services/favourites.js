import apiClient from '../config';

// Add a new favourite
export const addFavourite = async (payload) => {
    try {
        const response = await apiClient.post('/users/favourites', payload);
        return response.data;
    } catch (error) {
        console.error('Error adding favourite:', error);
        throw error;
    }
};

// Get all favourites
export const getFavourites = async () => {
    try {
        const response = await apiClient.get('/users/favourites');
        return response.data;
    } catch (error) {
        console.error('Error fetching favourites:', error);
        throw error;
    }
};

// Delete a favourite by ID
export const deleteFavourite = async (id) => {
    try {
        const response = await apiClient.delete(`/users/favourites/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting favourite with ID ${id}:`, error);
        throw error;
    }
};

// Update a favourite by ID
export const updateFavourite = async (id, payload) => {
    try {
        const response = await apiClient.patch(`/users/favourites/${id}`, payload);
        return response.data;
    } catch (error) {
        console.error(`Error updating favourite with ID ${id}:`, error);
        throw error;
    }
};
