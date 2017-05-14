import history from '../history';
import { deliverAlert } from './alert';
import { displayProfile, editAvailableTime, registerOrLogin } from '../api/profile';

export function showProfile() {
    return ((dispatch, getState) => {
        if (getState().fb) {
            displayProfile(getState().fb).then(res => {
                dispatch({
                    type: 'PROFILE_SHOW',
                    payload: res.data,
                });
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('內容有誤', 'danger', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('讀取失敗', 'danger', 3000));
                }
            });
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function updateAvailableTime(availableTime) {
    return ((dispatch, getState) => {
        editAvailableTime(getState().fb, availableTime).then(res => {
            dispatch({
                type: 'PROFILE_UPDATE_AVAILABLE_TIME',
                payload: res.data,
            });
        }).catch(err => {
            switch (err.response.status) {
                case 400:
                    dispatch(deliverAlert('內容有誤', 'danger', 3000));
                    break;
                case 401:
                    dispatch(deliverAlert('請先登入', 'warning', 3000));
                    break;
                default:
                    dispatch(deliverAlert('許願失敗', 'danger', 3000));
            }
        });
    });
}

export function regOrLogin(profile, alert) {
    return ((dispatch, getState) => {
        registerOrLogin(profile).then(res => {
            dispatch({
                type: 'FB_LOGIN',
                payload: profile,
            });
            if (alert) dispatch(deliverAlert('登入成功', 'success', 3000));
        }).catch(err => {
            dispatch({
                type: 'FB_LOGIN',
                payload: null,
            });
            dispatch(deliverAlert('登入失敗', 'danger', 3000));
        });
    });
}

export function logout() {
    return ((dispatch, getState) => {
        history.replace('/');
        dispatch({
            type: 'FB_LOGIN',
            payload: null,
        });
        dispatch(deliverAlert('已登出', 'info', 3000));
    });
}
