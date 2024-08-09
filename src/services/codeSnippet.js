import api from './config';

export const getAllCodeSnippets = async () => {
  try {
    const response = await api.get('/users/codes'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching code snippets:', error);
    throw error;
  }
};