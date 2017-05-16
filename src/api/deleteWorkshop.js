import axios from 'axios';

// const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
const baseUrl = 'http://localhost:3090';

export function deleteWorkshop(fb,w_id){
    let url = `${baseUrl}/workshops/${w_id}`;
    let { userID, signedRequest } = fb;
    return axios.delete(url, null, { headers: { userID, signedRequest } });
}
