import axios from 'axios';

const apiURL = import.meta.env.VITE_API_BASE_URL;

export const profile = async (data) => {
    const response = await axios
        .get(`${apiURL}/user/profile`, data)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
