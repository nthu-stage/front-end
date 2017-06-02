import axios from 'axios';

// const baseUrl = 'http://NTHUStage-dev.us-west-2.elasticbeanstalk.com/api';
const baseUrl = 'http://localhost:3090';

export function listWorkshop(fb, searchText, stateFilter) {
    let url = `${baseUrl}/workshops?searchText=${searchText}&stateFilter=${stateFilter}`;
    if (fb) {
        let { userID, signedRequest } = fb;
        return axios.get(url, { headers: { userID, signedRequest } });
    } else {
        return axios.get(url);
    }
}

export function getPostFromApi(fb, w_id) {
    let url = `${baseUrl}/workshops/${w_id}`;

    if(fb){
        let { userID, signedRequest } = fb;
        return axios.get(url, { headers: { userID, signedRequest } });
    }else{
        return axios.get(url);
    }

}
export function isAttended(fb,w_id){
    let url = `${baseUrl}/workshops/${w_id}`;
    if(fb){
        let { userID, signedRequest } = fb;
        return axios.post(url, null, { headers: { userID, signedRequest } });
    }else{
        return
    }
}
////////////後端沒做 undone
export function getAttendeeFromApi(fb, w_id){
    let url = `${baseUrl}/dashboard/${w_id}`;
    if(fb){
        let { userID, signedRequest } = fb;
        return axios.get(url, { headers: { userID, signedRequest } });
    } else {
        return
    }
}
