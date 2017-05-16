import axios from 'axios';

// const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
const baseUrl = 'http://localhost:3090';

export function displayProfile(fb) {
    let url = `${baseUrl}/profile`;
    let { userID, signedRequest } = fb;
    return axios.get(url, { headers: { userID, signedRequest } });
}

export function editAvailableTime(fb, availableTime) {
    let url = `${baseUrl}/profile?key=availableTime`;
    let { userID, signedRequest } = fb;
    return axios.put(url, availableTime, { headers: { userID, signedRequest } });
}

export function registerOrLogin(fb) {
    console.log('regOrLogin', fb);
    let url = `${baseUrl}/profile`;
    let { userID, signedRequest } = fb;
    return axios.post(url, fb, { headers: { userID, signedRequest } });
}
