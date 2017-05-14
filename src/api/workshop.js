import axios from 'axios';

const baseUrl = 'http://localhost:3090';

export function listWorkshop(fb, searchText, stateFilter) {
    let url = `${baseUrl}/workshops?searchText=${searchText}&stateFilter=${stateFilter}`;
    let { userID, signedRequest } = fb;
    return axios.get(url, { headers: { userID, signedRequest } });
}

export function getPostFromApi(fb, w_id) {
    let url = `${baseUrl}/workshops/${w_id}`;
    
    if(fb){
        let { userID, signedRequest } = fb;
        return axios.get(url, { headers: { userID, signedRequest } });
    }else{
        return axios.get(url, { headers: { userID: null, signedRequest: null } });
    }
    
}