import axios from 'axios';

const baseUrl = 'http://localhost:3090';

export function createIdea(fb, idea) {
    let url = `${baseUrl}/ideas`;
    let { userID, signedRequest } = fb;
    return axios.post(url, idea, { headers: { userID, signedRequest } });
}
