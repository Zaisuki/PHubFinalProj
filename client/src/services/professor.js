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
export const getCheck = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/check`, {
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
export const getConnect = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/connect`, {
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
export const getCoach = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/coach`, {
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
export const getCheckTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/check/task`, {
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
export const getConnectTask = async (classID) => {
    const response = await axios
        .get(`${apiURL}/professor/connect/task`, {
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
        .get(`${apiURL}/professor/coach/task`, {
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

export const getCheckTaskSubmission = async (taskID) => {
    const response = await axios
        .get(`${apiURL}/professor/check/task/submission`, {
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
    return response.message;
};
export const getConnectTaskSubmission = async (taskID) => {
    const response = await axios
        .get(`${apiURL}/professor/connect/task/submission`, {
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
    return response.message;
};
export const editConnectHighScore = async (taskID, editedScore) => {
    const response = await axios
        .put(
            `${apiURL}/professor/connect/task/editHighScore`,
            { taskID, editedScore },
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
export const scoreStudentConnect = async (data) => {
    const response = await axios
        .put(
            `${apiURL}/professor/connect/task/score`,
            { data },
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
export const editCheckHighScore = async (taskID, editedScore) => {
    const response = await axios
        .put(
            `${apiURL}/professor/check/task/editHighScore`,
            { taskID, editedScore },
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
export const scoreStudentCheck = async (data) => {
    const response = await axios
        .put(
            `${apiURL}/professor/check/task/score`,
            { data },
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
    console.log(response);
    return response;
};
