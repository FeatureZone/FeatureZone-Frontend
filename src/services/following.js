import apiClient from '../config';

// Follow a user by followerId
export const followUser = async (followerId) => {
    try {
        const response = await apiClient.post(`/users/following/${followerId}`);
        return response.data;
    } catch (error) {
        console.error(`Error following user with ID ${followerId}:`, error);
        throw error;
    }
};

// Unfollow a user by followerId
export const unfollowUser = async (followerId) => {
    try {
        const response = await apiClient.delete(`/users/following/${followerId}`);
        return response.data;
    } catch (error) {
        console.error(`Error unfollowing user with ID ${followerId}:`, error);
        throw error;
    }
};

// Get the list of users the current user is following
export const getFollowing = async () => {
    try {
        const response = await apiClient.get('/users/following');
        return response.data;
    } catch (error) {
        console.error('Error fetching following list:', error);
        throw error;
    }
};
