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
