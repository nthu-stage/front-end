import history from '../history';
import { deliverAlert } from './alert.js';
import { deleteWorkshop } from '../api/deleteWorkshop.js';
export function wsDelete(id){
    return ((dispatch,getState) => {
        if(getState().fb){
            deleteWorkshop(getState().fb,id).then(res => {
                dispatch({
                    type:'@MANAGE/DELETE',
                    payload: res.data,
                });
                history.replace(`/pf`);
                dispatch(deliverAlert('刪除成功','success',3000));
            }).catch(err => {
                ///401請先登入 400工作坊不存在
                if(err.response.status === 400){
                    dispatch(deliverAlert('請先登入','warning',3000));
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
            dispatch(deliverAlert('請先登入','warning',3000));
            history.replace(`/`);
        }
    });
}