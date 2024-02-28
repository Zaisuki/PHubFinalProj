import axios from 'axios';
import { cookies } from './entry';

const apiURL = import.meta.env.VITE_API_BASE_URL;

export const postAnnouncement = async (titleVal, descriptionVal) => {
    const response = await axios
        .post(
            `${apiURL}/professor/announcement`,
            {
                header: titleVal,
                announcement: descriptionVal,
                classID: 'public',
            },
            {
                withCredentials: true,
                headers: {
                    authorization: cookies.get('authorization'),
                },
            }
        )
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const getClass = async () => {
    const response = await axios
        .get(`${apiURL}/professor/class`, {
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

export const postCheck = async (formData) => {
    const response = await axios
        .post(`${apiURL}/professor/check`, formData, {
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

export const postConnect = async (formData) => {
    const response = await axios
        .post(`${apiURL}/professor/connect`, formData, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    console.log(response);
    return response;
};

export const postCoach = async (formData) => {
    const response = await axios
        .post(`${apiURL}/professor/coach`, formData, {
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
