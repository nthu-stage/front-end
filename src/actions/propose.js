import history from '../history';
import { deliverAlert } from './alert';
import { submitPropose , submitUpdate } from '../api/workshopManage'
import { getPostFromApi } from '../api/workshop'
export function ppSubmit(propose){
    return ((dispatch, getState) => {
        if(getState().fb){
            submitPropose(getState().fb, propose).then(res => {
                dispatch({
                    type: '@PROPOSE/SUBMIT',
                    payload:res.data
                });

                history.replace(`/wp/${res.data.w_id}`);
                dispatch(deliverAlert('提交成功','success',3000));
            }).catch(err => {
                if(err.response.status === 400){
                    dispatch(deliverAlert('請先登入','warnig',3000));
                }
                else if(err.response.status === 401){
                    dispatch(deliverAlert('工作坊不存在','danger',3000));
                    history.replace(`/`);
                }
                else{
                    dispatch(deliverAlert('讀取失敗','danger',3000));
                    history.replace(`/`);
                }
                console.log(err.response);
            });
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }

    });
}
export function ppUpdate(propose,w_id){
    return ((dispatch, getState) => {
        if(getState().fb){
            submitUpdate(getState().fb, propose, w_id).then(res => {
                dispatch({
                    type: '@MANAGE/UPDATE',
                    payload:res.data
                });

                history.replace(`/wm/${w_id}`);
                dispatch(deliverAlert('提交成功','success',3000));
            }).catch(err => {
                console.log(err);
                if(err.response.status === 400){
                    dispatch(deliverAlert('請先登入','warnig',3000));
                }
                else if(err.response.status === 401){
                    dispatch(deliverAlert('工作坊不存在','danger',3000));
                    history.replace(`/`);
                }
                else{
                    dispatch(deliverAlert('讀取失敗','danger',3000));
                    history.replace(`/`);
                }
            });
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}
export function getPost(w_id){

    return ((dispatch, getState) => {
        dispatch({
            type: '@WORKSHOPPAGE/LOADING'
        });
        getPostFromApi(getState().fb, w_id).then(res => {
            dispatch({
                type: '@MANAGE/INIT',
                payload: res.data
            });
            dispatch({
                type: '@WORKSHOPPAGE/LOADING_DONE'
            })
            console.log(res);
            //add loading screen display later undone
        }).catch(err => {
            if(err.response.status === 400){
                dispatch(deliverAlert('請先登入','warnig',3000));
            }
            else if(err.response.status === 401){
                dispatch(deliverAlert('工作坊不存在','danger',3000));
                history.replace(`/`);
            }
            else{
                dispatch(deliverAlert('讀取失敗','danger',3000));
                history.replace(`/`);
            }
        });
    });

}
export function isLogin(){
    return ((dispatch, getState) => {
        if(!getState().fb){
            history.replace('/');
            dispatch(deliverAlert('請先登入','warning',3000));
        }
    })
}
