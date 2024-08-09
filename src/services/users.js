import apiClient from '../config';

// Authentication Endpoints
export const apiSignup = (payload) => {
    return apiClient.post('/auth/signup', payload);
};

export const apiLogin = (payload) => {
    return apiClient.post('/auth/token/login', payload);
};

export const apiLogout = () => {
    return apiClient.post('/auth/token/logout');
};

// User Management Endpoints
export const getUserByUsername = (username) => {
    return apiClient.get(`/auth/${username}`);
};

export const getUserById = (userId) => {
    return apiClient.get(`/${userId}`);
};

export const updateUserById = (userId, payload) => {
    return apiClient.patch(`/${userId}`, payload);
};

export const deleteUserById = (userId) => {
    return apiClient.delete(`/${userId}`);
};

// Favorites Endpoints
export const addFavorite = (payload) => {
    return apiClient.post('/favourites', payload);
};

export const getFavorites = () => {
    return apiClient.get('/favourites');
};

export const deleteFavoriteById = (favoriteId) => {
    return apiClient.delete(`/favourites/${favoriteId}`);
};

export const updateFavoriteById = (favoriteId, payload) => {
    return apiClient.patch(`/favourites/${favoriteId}`, payload);
};

// Comments Endpoint
export const addComment = (payload) => {
    return apiClient.post('/comments', payload);
};

// Following & Followers Endpoints
export const followUser = (followerId) => {
    return apiClient.post(`/following/${followerId}`);
};

export const unfollowUser = (followerId) => {
    return apiClient.delete(`/following/${followerId}`);
};

export const getFollowers = () => {
    return apiClient.get('/followers');
};

export const getFollowing = () => {
    return apiClient.get('/following');
};
