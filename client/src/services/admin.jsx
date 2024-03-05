import axios from 'axios';
import { cookies } from './entry';

const apiURL = import.meta.env.VITE_API_BASE_URL;

export const createAccount = async (formData) => {
    const response = await axios
        .post(`${apiURL}/entry/signup`, formData, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const createSubject = async (formData) => {
    const response = await axios
        .post(`${apiURL}/registration/add/subject`, formData, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
