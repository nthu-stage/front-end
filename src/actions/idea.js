import history from '../history';
import {deliverAlert} from './alert';
import {
    comeUpWithIdea as comeUpWithIdeaFromApi,
    listIdea as listIdeaFromApi,
    updateIdea as updateIdeaFromApi,
    deleteIdea as deleteIdeaFromApi,
    likeIdea as likeIdeaFromApi,
    showIdea as showIdeaFromApi
} from '../api/idea';
import cookies from '../cookies';

export function comeUpWithIdea(idea) {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            comeUpWithIdeaFromApi(cookies.get('fb'), idea).then(res => {
                dispatch({type: 'IDEA_COME_UP_WITH', payload: res.data});
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
            });
        } else {
            history.replace('/i');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function searchIdea(searchText, order) {
    return ((dispatch, getState) => {
        console.log('searchIdea', getState());
        listIdeaFromApi(cookies.get('fb'), searchText, order).then(res => {
            dispatch({type: 'IDEA_SEARCH', payload: res.data});
        }).catch(err => {
            switch (err.response.status) {
                case 400:
                    dispatch(deliverAlert('內容有誤', 'danger', 3000));
                    break;
                default:
                    dispatch(deliverAlert('搜尋失敗', 'danger', 3000));
            }
            console.log(err.response);
        });
    });
}

export function updateIdea(idea) {
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
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
            deleteIdeaFromApi(cookies.get('fb'), i_id).then(res => {
                history.replace(`/i`);
                dispatch(deliverAlert('刪除成功', 'success', 3000));
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        history.replace(`/i`);
                        dispatch(deliverAlert('願望不存在', 'danger', 3000));
                        break;
                    case 401:
                        history.replace('/i');
                        dispatch(deliverAlert('請先登入', 'warning', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('刪除失敗', 'danger', 3000));
                }
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
            likeIdeaFromApi(cookies.get('fb'), i_id).then(res => {
                dispatch({type: 'IDEA_LIKE_SEARCH', payload: res.data});
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
                console.log('like Idea', err.response);
            });
        } else {
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function showViewEditIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        showIdeaFromApi(cookies.get('fb'), i_id).then(res => {
            dispatch({type: 'IDEA_SHOW_VIEW_EDIT', payload: res.data});
        }).catch(err => {
            switch (err.response.status) {
                case 400:
                    history.replace(`/i`);
                    dispatch(deliverAlert('願望不存在', 'danger', 3000));
                    break;
                default:
                    dispatch(deliverAlert('讀取失敗', 'danger', 3000));
            }
        });
    });
}

export function likeViewEditIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        if (cookies.get('fb')) {
            likeIdeaFromApi(cookies.get('fb'), i_id).then(res => {
                dispatch({type: 'IDEA_LIKE_VIEW_EDIT', payload: res.data});
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
            });
        } else {
            history.replace('/i');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}
