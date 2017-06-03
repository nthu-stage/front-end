export function deliverAlert(msg, type, delay){
    return (dispatch) => {
        dispatch(showAlert(msg, type));
        dispatch(hideAlert(delay));
    };
}

export function showAlert(msg, type){
    return {
        type: '@ALERT/SHOW',
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
        type: '@ALERT/HIDE',
        payload: p,
    }
}
