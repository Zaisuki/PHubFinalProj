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

export const createClass = async (formData) => {
    const response = await axios
        .post(`${apiURL}/registration/add/class`, formData, {
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
export const addClass = async (formData) => {
    const response = await axios
        .post(`${apiURL}/registration/add/class`, formData, {
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

export const getProfessorID = async (query) => {
    const response = await axios
        .get(`${apiURL}/registration/search/professorID`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                query,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const getSubjectID = async (query) => {
    const response = await axios
        .get(`${apiURL}/registration/search/subjectID`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                query,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const enrollStudent = async (formData) => {
    const response = await axios
        .post(`${apiURL}/registration/enroll/student/class`, formData, {
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
export const getStudentID = async (query) => {
    const response = await axios
        .get(`${apiURL}/registration/search/studentID`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                query,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const getClassID = async (query) => {
    const response = await axios
        .get(`${apiURL}/registration/search/classID`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                query,
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
