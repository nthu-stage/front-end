import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {cookies, history} from '../common';
import {deliverAlert} from './alert';
import {
    listWorkshop as listWorkshopFromApi,
    attendWorkshop as attendWorkshopFromApi,
    showWorkshop as showWorkshopFromApi,
    listAttendee as listAttendeeFromApi,
    deleteWorkshop as deleteWorkshopFromApi,
    proposeWorkshop as proposeWorkshopFromApi,
    updateWorkshop as updateWorkshopFromApi
} from '../api/workshop';

export function proposeWorkshop(propose) {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            proposeWorkshopFromApi(cookies.get('fb'), propose).then(res => {
                history.replace(`/wp/${res.data.w_id}`);
                dispatch(deliverAlert('提交成功', 'success', 3000));
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('內容有誤', 'danger', 3000));
                        break;
                    case 401:
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('提案失敗', 'danger', 3000));
                }
            }).then(() => {
                dispatch(hideLoading());
            });
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }

    });
}

export function listWorkshop(searchText, stateFilter) {
    return ((dispatch, getState) => {
        dispatch(showLoading());
        listWorkshopFromApi(cookies.get('fb'), searchText, stateFilter).then(res => {
            dispatch({type: '@WORKSHOP/LIST', payload: res.data});
        }).catch(err => {
            switch (err.response.status) {
                case 400:
                    dispatch(deliverAlert('內容有誤', 'danger', 3000));
                    break;
                default:
                    dispatch(deliverAlert('搜尋失敗', 'danger', 3000));
            }
        }).then(() => {
            dispatch(hideLoading());
        });
    });
}

export function showWorkshop(w_id) {
    return ((dispatch, getState) => {
        dispatch(showLoading());
        showWorkshopFromApi(cookies.get('fb'), w_id).then(res => {
            dispatch({type: '@WORKSHOP/SHOW', payload: res.data});
        }).catch(err => {
            switch (err.response.status) {
                case 400:
                    dispatch(deliverAlert('工作坊不存在', 'danger', 3000));
                    break;
                case 401:
                    history.replace('/');
                    dispatch(deliverAlert('請先登入', 'warning', 3000));
                    break;
                default:
                    dispatch(deliverAlert('讀取失敗', 'danger', 3000));
            }
        }).then(() => {
            dispatch(hideLoading());
        });
    });
}

export function updateWorkshop(propose, w_id) {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            updateWorkshopFromApi(cookies.get('fb'), propose, w_id).then(res => {
                history.replace(`/wm/${w_id}`);
                dispatch(deliverAlert('提交成功', 'success', 3000));
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('內容有誤', 'danger', 3000));
                        break;
                    case 401:
                        history.replace('/');
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('編輯失敗', 'danger', 3000));
                }
            }).then(() => {
                dispatch(hideLoading());
            });
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function deleteWorkshop(id) {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            deleteWorkshopFromApi(cookies.get('fb'), id).then(res => {
                history.replace('/pf');
                dispatch(deliverAlert('刪除成功', 'success', 3000));
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('工作坊不存在', 'danger', 3000));
                        break;
                    case 401:
                        history.replace('/i');
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('刪除失敗', 'danger', 3000));
                }
            }).then(() => {
                dispatch(hideLoading());
            });
        } else {
            dispatch(deliverAlert('請先登入', 'warning', 3000));
            history.replace('/');
        }
    });
}

export function attendWorkshop(w_id) {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            attendWorkshopFromApi(cookies.get('fb'), w_id).then(res => {
                dispatch({type: '@WORKSHOP/ATTEND', payload: res.data});
                if (res.data.attended) {
                    dispatch(deliverAlert('報名成功', 'success', 3000));
                } else {
                    dispatch(deliverAlert('已取消報名', 'warning', 3000));
                }
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('工作坊不存在', 'danger', 3000));
                        break;
                    case 401:
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('報名失敗', 'danger', 3000));
                }
            }).then(() => {
                dispatch(hideLoading());
            });
        } else {
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function listAttendee(w_id) {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            listAttendeeFromApi(cookies.get('fb'), w_id).then(res => {
                dispatch({type: '@WORKSHOP/ATTENDEE', payload: res.data});
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('工作坊不存在', 'danger', 3000));
                        break;
                    case 401:
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('讀取失敗', 'danger', 3000));
                }
            }).then(() => {
                dispatch(hideLoading());
            });
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}
