import axios from 'axios';
import { cookies } from './entry';

const apiURL = import.meta.env.VITE_API_BASE_URL;

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
export const getCheck = async () => {
    const response = await axios
        .get(`${apiURL}/student/check`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};
export const getConnect = async () => {
    const response = await axios
        .get(`${apiURL}/student/connect`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};
export const getCoach = async () => {
    const response = await axios
        .get(`${apiURL}/student/coach`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};
export const getCheckTask = async (taskID) => {
    const response = await axios
        .get(`${apiURL}/student/check/task`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                taskID,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const getConnectTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/student/connect/task`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                classID,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const getCoachTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/student/coach/task`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                classID,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const submitCheck = async (formData) => {
    const response = await axios
        .post(`${apiURL}/student/check`, formData, {
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
export const unSubmitCheck = async (taskID) => {
    const response = await axios
        .put(
            `${apiURL}/student/unsubmit/check`,
            { taskID },
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
