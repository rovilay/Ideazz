import axios from 'axios';

require('dotenv').config();

const baseUrl = process.env.REACT_APP_API_URL;

class UserAPI {
    static postNewUsers(userData) {
        return axios.post(`${baseUrl}/user/signup`, userData);
    }

    static loginUser(userData) {
        return axios.get(`${baseUrl}/user/signin`, userData);
    }

    // static getUserDataFromStagingApi(email) {
    //     const token = Cookie.get('jwt-token');
    //     const usersStagingUrl = process.env.REACT_APP_ALL_USERS;
    //     return axios.get(
    //         `${usersStagingUrl}${email}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    // }
}

export default UserAPI;
