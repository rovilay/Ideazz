import axios from 'axios';
import Env from '../config/env';

const baseUrl = Env.apiUrl;

class IdeaAPI {
    static postIdea(ideaData) {
        return axios.post(`${baseUrl}/ideas`, ideaData);
    }

    static updateIdea({ ideaId, ideaData }) {
        return axios.put(`${baseUrl}/ideas/${ideaId}`, ideaData);
    }

    static getIdea(ideaId) {
        return axios.get(`${baseUrl}/ideas/${ideaId}`);
    }

    static getAllIdeas({ limit, offset, sort }) {
        return axios.get(`${baseUrl}/ideas?limit=${limit}&offset=${offset}&sort=${sort}`);
    }

    static deleteIdea(ideaId) {
        return axios.delete(`${baseUrl}/ideas/${ideaId}`);  
    }
}

export default IdeaAPI;
