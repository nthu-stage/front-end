import {cookies, history} from '../common';
import {deliverAlert} from './alert';
import {showProfile as showProfileFromApi, updateAvailableTime as updateAvailableTimeFromApi, registerOrLogin} from '../api/profile';

export function showProfile() {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            showProfileFromApi(cookies.get('fb')).then(res => {
                dispatch({type: '@PROFILE/SHOW', payload: res.data});
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
        updateAvailableTimeFromApi(cookies.get('fb'), availableTime).then(res => {
            dispatch({type: '@PROFILE/UPDATE_AVAILABLE_TIME', payload: res.data});
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
            if (alert)
                dispatch(deliverAlert('登入成功', 'success', 3000));
            }
        ).catch(err => {
            cookies.remove('fb');
            dispatch(deliverAlert('登入失敗', 'danger', 3000));
        });
    });
}
