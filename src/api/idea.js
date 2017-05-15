import axios from 'axios';

const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
// const baseUrl = 'http://localhost:3090';

export function createIdea(fb, idea) {
    let url = `${baseUrl}/ideas`;
    let { userID, signedRequest } = fb;
    return axios.post(url, idea, { headers: { userID, signedRequest } });
}

export function listIdea(fb, searchText, order) {
    let url = `${baseUrl}/ideas?searchText=${searchText}&order=${order}`;
    if (fb) {
        let { userID, signedRequest } = fb;
        return axios.get(url, { headers: { userID, signedRequest } });
    } else {
        return axios.get(url);
    }
}

export function editIdea(fb, idea) {
    let url = `${baseUrl}/ideas/${idea.i_id}`;
    let { userID, signedRequest } = fb;
    return axios.put(url, idea, { headers: { userID, signedRequest } });
}

export function removeIdea(fb, i_id) {
    let url = `${baseUrl}/ideas/${i_id}`;
    let { userID, signedRequest } = fb;
    return axios.delete(url, { headers: { userID, signedRequest } });
}

export function likeIdea(fb, i_id) {
    let url = `${baseUrl}/ideas/${i_id}`;
    let { userID, signedRequest } = fb;
    return axios.post(url, { headers: { userID, signedRequest } });
}

export function showIdea(fb, i_id) {
    let url = `${baseUrl}/ideas/${i_id}`;
    if (fb) {
        let { userID, signedRequest } = fb;
        return axios.get(url, { headers: { userID, signedRequest } });
    } else {
        return axios.get(url);
    }
}
