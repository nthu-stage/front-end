import axios from 'axios';
const baseUrl = 'http://localhost:3090';

export function deleteWorkshop(fb,w_id){
    let url = `${baseUrl}/workshops/${w_id}`;
    let { userID, signedRequest } = fb;
    return axios.delete(url, { headers: { userID, signedRequest } });
}