import {deliverAlert} from './alert';
import {listWorkshop, isAttended, getPostFromApi, getAttendeeFromApi, deleteWorkshop, submitPropose, submitUpdate} from '../api/workshop';

export function searchWorkshop(searchText, stateFilter) {
    return ((dispatch, getState) => {
        listWorkshop(getState().fb, searchText, stateFilter).then(res => {
            dispatch({type: 'WORKSHOP_SEARCH', payload: res.data});
        }).catch(err => {
            switch (err.response.status) {
                case 400:
                    dispatch(deliverAlert('內容有誤', 'danger', 3000));
                    break;
                default:
                    dispatch(deliverAlert('搜尋失敗', 'danger', 3000));
            }
        });
    });
}

export function wsDelete(id) {
    return ((dispatch, getState) => {
        if (getState().fb) {
            deleteWorkshop(getState().fb, id).then(res => {
                dispatch({type: '@MANAGE/DELETE', payload: res.data});
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
            });
        } else {
            dispatch(deliverAlert('請先登入', 'warning', 3000));
            history.replace('/');
        }
    });
}

export function wspSubmit(w_id) {
    return ((dispatch, getState) => {
        if (getState().fb) {
            isAttended(getState().fb, w_id).then(res => {
                dispatch({type: '@WORKSHOPPAGE/WORKSHOPPAGE_SUBMIT', payload: res.data});
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
            });
        } else {
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function ppSubmit(propose) {
    return ((dispatch, getState) => {
        if (getState().fb) {
            submitPropose(getState().fb, propose).then(res => {
                dispatch({type: '@PROPOSE/SUBMIT', payload: res.data});

                history.replace(`/wp/${res.data.w_id}`);
                dispatch(deliverAlert('提交成功', 'success', 3000));
            }).catch(err => {
                if (err.response.status === 400) {
                    dispatch(deliverAlert('請先登入', 'warning', 3000));
                } else if (err.response.status === 401) {
                    dispatch(deliverAlert('工作坊不存在', 'danger', 3000));
                    history.replace('/');
                } else {
                    dispatch(deliverAlert('讀取失敗', 'danger', 3000));
                    history.replace('/');
                }
                console.log(err.response);
            });
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }

    });
}
export function ppUpdate(propose, w_id) {
    return ((dispatch, getState) => {
        if (getState().fb) {
            submitUpdate(getState().fb, propose, w_id).then(res => {
                dispatch({type: '@MANAGE/UPDATE', payload: res.data});
                history.replace(`/wm/${w_id}`);
                dispatch(deliverAlert('提交成功', 'success', 3000));
            }).catch(err => {
                console.log(err);
                if (err.response.status === 400) {
                    dispatch(deliverAlert('請先登入', 'warning', 3000));
                } else if (err.response.status === 401) {
                    dispatch(deliverAlert('工作坊不存在', 'danger', 3000));
                    history.replace('/');
                } else {
                    dispatch(deliverAlert('讀取失敗', 'danger', 3000));
                    history.replace('/');
                }
            });
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}
export function getPost(w_id) {
    return ((dispatch, getState) => {
        dispatch({type: '@WORKSHOPPAGE/LOADING'});
        getPostFromApi(getState().fb, w_id).then(res => {
            dispatch({type: '@MANAGE/INIT', payload: res.data});
            dispatch({type: '@WORKSHOPPAGE/LOADING_DONE'})
        }).catch(err => {
            // console.log(err);
            if (err.response.status === 400) {
                dispatch(deliverAlert('請先登入', 'warning', 3000));
            } else if (err.response.status === 401) {
                dispatch(deliverAlert('工作坊不存在', 'danger', 3000));
                history.replace('/');
            } else {
                dispatch(deliverAlert('讀取失敗', 'danger', 3000));
                history.replace('/');
            }
        });
    });

}

export function getAttendee(w_id) {
    return ((dispatch, getState) => {
        if (getState().fb) {
            getAttendeeFromApi(getState().fb, w_id).then(res => {
                dispatch({type: '@ATTENDEELIST/GET_LIST', payload: res.data});
            })
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}

export function isLogin() {
    return ((dispatch, getState) => {
        if (!getState().fb) {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    })
}
