import axios from 'axios';

const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
// const baseUrl = 'http://localhost:3090';

export function registerOrLogin(fb) {
    let url = `${baseUrl}/profile`;
    let {userID, accessToken, expiresIn} = fb;
    return axios.post(url, fb, {
        headers: {
            userID,
            accessToken,
            expiresIn
        }
    });
}

export function showProfile(fb) {
    let url = `${baseUrl}/profile`;
    let {userID, accessToken} = fb;
    return axios.get(url, {
        headers: {
            userID,
            accessToken
        }
    });
}

export function updateAvailableTime(fb, availableTime) {
    let url = `${baseUrl}/profile?key=availableTime`;
    let {userID, accessToken} = fb;
    return axios.put(url, availableTime, {
        headers: {
            userID,
            accessToken
        }
    });
}

export function updateEmail(fb, email) {
    let url = `${baseUrl}/profile?key=email`;
    let {userID, accessToken} = fb;
    return axios.put(url, email, {
        headers: {
            userID,
            accessToken
        }
    });
}
