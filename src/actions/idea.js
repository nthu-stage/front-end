import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {history} from '../common';
import {deliverAlert} from './common';
import {
    comeUpWithIdea as comeUpWithIdeaFromApi,
    listIdea as listIdeaFromApi,
    updateIdea as updateIdeaFromApi,
    deleteIdea as deleteIdeaFromApi,
    likeIdea as likeIdeaFromApi,
    showIdea as showIdeaFromApi
} from '../api/idea';
import {cookies} from '../common';

export function comeUpWithIdea(idea) {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            comeUpWithIdeaFromApi(cookies.get('fb'), idea).then(res => {
                history.replace(`/i/${res.data.i_id}`);
                dispatch(deliverAlert('許願成功', 'success', 3000));
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('內容有誤', 'danger', 3000));
                        break;
                    case 401:
                        history.replace('/i');
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('許願失敗', 'danger', 3000));
                }
            }).then(() => {
                dispatch(hideLoading());
            });
        } else {
            history.replace('/i');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function listIdea(searchText, order) {
    return ((dispatch, getState) => {
        dispatch(showLoading());
        listIdeaFromApi(cookies.get('fb'), searchText, order).then(res => {
            dispatch({type: '@IDEA/LIST', payload: res.data});
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

export function listMoreIdea(searchText='', order='new', offset, limit) {
    return ((dispatch, getState) => {
        dispatch(showLoading());
        listIdeaFromApi(cookies.get('fb'), searchText, order, offset, limit).then(res => {
            dispatch({type: '@IDEA/LIST_MORE', payload: res.data});
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

export function showIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        dispatch(showLoading());
        showIdeaFromApi(cookies.get('fb'), i_id).then(res => {
            dispatch({type: '@IDEA/SHOW', payload: res.data});
        }).catch(err => {
            switch (err.response.status) {
                case 400:
                    history.replace('/i');
                    dispatch(deliverAlert('願望不存在', 'danger', 3000));
                    break;
                default:
                    dispatch(deliverAlert('讀取失敗', 'danger', 3000));
            }
        }).then(() => {
            dispatch(hideLoading());
        });
    });
}

export function updateIdea(idea) {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            updateIdeaFromApi(cookies.get('fb'), idea).then(res => {
                history.replace(`/i/${idea.i_id}`);
                dispatch(deliverAlert('編輯成功', 'success', 3000));
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('內容有誤', 'danger', 3000));
                        break;
                    case 401:
                        history.replace('/i');
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('編輯失敗', 'danger', 3000));
                }
            }).then(() => {
                dispatch(hideLoading());
            });
        } else {
            history.replace('/i');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function deleteIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            deleteIdeaFromApi(cookies.get('fb'), i_id).then(res => {
                history.replace('/i');
                dispatch(deliverAlert('刪除成功', 'success', 3000));
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        history.replace('/i');
                        dispatch(deliverAlert('願望不存在', 'danger', 3000));
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
            history.replace('/i');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function likeSearchIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            likeIdeaFromApi(cookies.get('fb'), i_id).then(res => {
                dispatch({type: '@IDEA/LIKE_LIST', payload: res.data});
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('願望不存在', 'danger', 3000));
                        break;
                    case 401:
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('喜歡失敗', 'danger', 3000));
                }
            }).then(() => {
                dispatch(hideLoading());
            });
        } else {
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function likeViewEditIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            dispatch(showLoading());
            likeIdeaFromApi(cookies.get('fb'), i_id).then(res => {
                dispatch({type: '@IDEA/LIKE_SHOW', payload: res.data});
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('願望不存在', 'danger', 3000));
                        break;
                    case 401:
                        history.replace('/i');
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('喜歡失敗', 'danger', 3000));
                }
            }).then(() => {
                dispatch(hideLoading());
            });
        } else {
            history.replace('/i');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}
