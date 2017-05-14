import axios from 'axios';

const baseUrl = 'http://localhost:3090';

export function listWorkshop(fb, searchText, stateFilter) {
    let url = `${baseUrl}/workshops?searchText=${searchText}&stateFilter=${stateFilter}`;
    let { userID, signedRequest } = fb;
    return axios.get(url, { headers: { userID, signedRequest } });
}
