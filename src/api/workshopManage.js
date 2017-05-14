import axios from 'axios';
const baseUrl = 'http://localhost:3090';

export function submitPropose(fb,propose){
    let url = `${baseUrl}/workshops`;
    let { userID, signedRequest } = fb;
    return axios.post(url, propose, { headers: { userID, signedRequest } });
}
export function submitUpdate(fb,propose){
    let url = `${baseUrl}/workshops`;
    let { userID, signedRequest } = fb;
    return axios.post(url, propose, { headers: { userID, signedRequest } });
}