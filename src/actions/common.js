import {cookies, history} from '../common';

export function deliverAlert(msg, type, delay){
    return (dispatch) => {
        dispatch(showAlert(msg, type));
        dispatch(hideAlert(delay));
    };
}

export function showAlert(msg, type){
    return {
        type: 'ALERT_SHOW',
        payload: { msg, type, isOpen: true },
    }
}

export function hideAlert(delay){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(false);
        }, delay);
    }).then(ret => {
        return ret;
    });
    return {
        type: 'ALERT_HIDE',
        payload: p,
    }
}

export function authenticate() {
    return ((dispatch, getState) => {
        if (!cookies.get('fb')) {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    })
}
