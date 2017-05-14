import history from '../history';
import { deliverAlert } from './alert';
import { createIdea, listIdea, editIdea, removeIdea, likeIdea, showIdea } from '../api/idea';

export function comeUpWithIdea(idea) {
    return ((dispatch, getState) => {
        createIdea(getState().fb, idea).then(res => {
            dispatch({
                type: 'IDEA_COME_UP_WITH',
                payload: res.data,
            });
            history.replace(`/i/${res.data.i_id}`);
            dispatch(deliverAlert('許願成功', 'success', 3000));
        }).catch(res => {
            dispatch(deliverAlert('許願失敗', 'danger', 3000));
        });
    });
}

export function searchIdea(searchText, order) {
    return ((dispatch, getState) => {
        listIdea(getState().fb, searchText, order).then(res => {
            dispatch({
                type: 'IDEA_SEARCH',
                payload: res.data,
            });
        }).catch(res => {
            dispatch(deliverAlert('搜尋失敗', 'danger', 3000));
        });
    });
}

export function updateIdea(idea) {
    return ((dispatch, getState) => {
        editIdea(getState().fb, idea).then(res => {
            history.replace(`/i/${idea.i_id}`);
            dispatch(deliverAlert('編輯成功', 'success', 3000));
        }).catch(res => {
            dispatch(deliverAlert('編輯失敗', 'danger', 3000));
        });
    });
}

export function deleteIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        removeIdea(getState().fb, i_id).then(res => {
            history.replace(`/i/`);
            dispatch(deliverAlert('刪除成功', 'success', 3000));
        }).catch(res => {
            dispatch(deliverAlert('刪除失敗', 'danger', 3000));
        });
    });
}

export function likeSearchIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        likeIdea(getState().fb, i_id).then(res => {
            dispatch({
                type: 'IDEA_LIKE_SEARCH',
                payload: res.data,
            });
        }).catch(res => {
            dispatch(deliverAlert('喜歡失敗', 'danger', 3000));
        });
    });
}

export function showViewEditIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        showIdea(getState().fb, i_id).then(res => {
            dispatch({
                type: 'IDEA_SHOW_VIEW_EDIT',
                payload: res.data,
            });
        }).catch(res => {
            dispatch(deliverAlert('讀取失敗', 'danger', 3000));
        });
    });
}

export function likeViewEditIdea(i_id) {
    i_id = parseInt(i_id, 10);
    return ((dispatch, getState) => {
        likeIdea(getState().fb, i_id).then(res => {
            dispatch({
                type: 'IDEA_LIKE_VIEW_EDIT',
                payload: res.data,
            });
        }).catch(res => {
            dispatch(deliverAlert('喜歡失敗', 'danger', 3000));
        });
    });
}
