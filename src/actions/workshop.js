import { deliverAlert } from './alert';
import { listWorkshop } from '../api/workshop';

export function searchWorkshop(searchText, stateFilter) {
    return ((dispatch, getState) => {
        listWorkshop(getState().fb, searchText, stateFilter).then(res => {
            dispatch({
                type: 'WORKSHOP_SEARCH',
                payload: res.data,
            });
        }).catch(err => {
            switch (err.response.status) {
                case 400:
                    dispatch(deliverAlert('內容有誤', 'danger', 3000));
                    break;
                default:
                    dispatch(deliverAlert('搜尋失敗', 'danger', 3000));
            }
        });
    });
}
