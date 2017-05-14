import { deliverAlert } from './alert';
import { listWorkshop } from '../api/workshop';

export function searchWorkshop(searchText, stateFilter) {
    return ((dispatch, getState) => {
        listWorkshop(getState().fb, searchText, stateFilter).then(res => {
            dispatch({
                type: 'WORKSHOP_SEARCH',
                payload: res.data,
            });
        }).catch(res => {
            dispatch(deliverAlert('搜尋失敗', 'danger', 3000));
        });
    });
}
