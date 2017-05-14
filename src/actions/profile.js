import { deliverAlert } from './alert';
import { displayProfile, editAvailableTime } from '../api/profile';

export function showProfile() {
    return ((dispatch, getState) => {
        displayProfile(getState().fb).then(res => {
            dispatch({
                type: 'PROFILE_SHOW',
                payload: res.data,
            });
        }).catch(res => {
            switch (res.status) {
                case 401:
                    dispatch(deliverAlert('請先登入', 'warning', 3000));
                    break;
                default:
                    dispatch(deliverAlert('讀取失敗', 'danger', 3000));
            }
        });
    });
}

export function updateAvailableTime(availableTime) {
    return ((dispatch, getState) => {
        editAvailableTime(getState().fb, availableTime).then(res => {
            dispatch({
                type: 'PROFILE_UPDATE_AVAILABLE_TIME',
                payload: res.data,
            });
        }).catch(res => {
            switch (res.status) {
                case 401:
                    dispatch(deliverAlert('請先登入', 'warning', 3000));
                    break;
                default:
                    dispatch(deliverAlert('修改失敗', 'danger', 3000));
            }
        });
    });
}
