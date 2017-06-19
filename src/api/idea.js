import axios from 'axios';

const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
// const baseUrl = 'http://localhost:3090';

export function comeUpWithIdea(fb, idea) {
    let url = `${baseUrl}/ideas`;
    let {userID, accessToken} = fb;
    return axios.post(url, idea, {
        headers: {
            userID,
            accessToken
        }
    });
}

export function listIdea(fb, searchText, order) {
    let url = `${baseUrl}/ideas?searchText=${searchText}&order=${order}`;
    if (fb) {
        let {userID, accessToken} = fb;
        return axios.get(url, {
            headers: {
                userID,
                accessToken
            }
        });
    } else {
        return axios.get(url);
    }
}

export function updateIdea(fb, idea) {
    let url = `${baseUrl}/ideas/${idea.i_id}`;
    let {userID, accessToken} = fb;
    return axios.put(url, idea, {
        headers: {
            userID,
            accessToken
        }
    });
}

export function deleteIdea(fb, i_id) {
    let url = `${baseUrl}/ideas/${i_id}`;
    let {userID, accessToken} = fb;
    return axios.delete(url, {
        headers: {
            userID,
            accessToken
        }
    });
}

export function likeIdea(fb, i_id) {
    let url = `${baseUrl}/ideas/${i_id}`;
    let {userID, accessToken} = fb;
    return axios.post(url, null, {
        headers: {
            userID,
            accessToken
        }
    });
}

export function showIdea(fb, i_id) {
    let url = `${baseUrl}/ideas/${i_id}`;
    if (fb) {
        let {userID, accessToken} = fb;
        return axios.get(url, {
            headers: {
                userID,
                accessToken
            }
        });
    } else {
        return axios.get(url);
    }
}
