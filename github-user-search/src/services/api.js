import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`, // Use API key from .env file
  },
});

export const fetchGitHubUser = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data; // Return user data
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};
