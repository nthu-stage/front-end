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
