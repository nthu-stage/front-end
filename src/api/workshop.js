import axios from 'axios';

const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
// const baseUrl = 'http://localhost:3090';

export function listWorkshop(fb, searchText, stateFilter, offset, limit) {
    stateFilter = 'all';
    let url = `${baseUrl}/workshops?searchText=${searchText}&stateFilter=${stateFilter}`;
    if(offset){
        url+='&offset=';
        url+=`${offset}`;
    }
    if(limit){
        url+='&limit=';
        url+=`${limit}`;
    }
    if (fb) {
        let {userID, signedRequest} = fb;
        return axios.get(url, {
            headers: {
                userID,
                signedRequest
            }
        });
    }
    return axios.get(url);
}

export function showWorkshop(fb, w_id) {
    let url = `${baseUrl}/workshops/${w_id}`;
    if (fb) {
        let {userID, signedRequest} = fb;
        return axios.get(url, {
            headers: {
                userID,
                signedRequest
            }
        });
    }
    return axios.get(url);
}
export function attendWorkshop(fb, w_id) {
    let url = `${baseUrl}/workshops/${w_id}`;
    let {userID, signedRequest} = fb;
    return axios.post(url, null, {
        headers: {
            userID,
            signedRequest
        }
    });
}

export function listAttendee(fb, w_id) {
    let url = `${baseUrl}/dashboard/attendees/${w_id}`;
    let {userID, signedRequest} = fb;
    return axios.get(url, {
        headers: {
            userID,
            signedRequest
        }
    });
}

export function deleteWorkshop(fb, w_id) {
    let url = `${baseUrl}/workshops/${w_id}`;
    let {userID, signedRequest} = fb;
    return axios.delete(url, {
        headers: {
            userID,
            signedRequest
        }
    });
}

export function proposeWorkshop(fb, propose) {
    let url = `${baseUrl}/workshops`;
    let {userID, signedRequest} = fb;
    return axios.post(url, propose, {
        headers: {
            userID,
            signedRequest
        }
    });
}

export function updateWorkshop(fb, propose, w_id) {
    let url = `${baseUrl}/workshops/${w_id}`;
    let {userID, signedRequest} = fb;
    return axios.put(url, propose, {
        headers: {
            userID,
            signedRequest
        }
    });
}
