import history from '../history';
import { deliverAlert } from './alert.js';
import { deleteWorkshop } from '../api/deleteWorkshop.js';
export function wsDelete(id){
    return ((dispatch,getState) => {
        deleteWorkshop(getState().fb,id).then(res => {
            dispatch({
                type:'@MANAGE/DELETE',
                payload: res.data,
            });
            history.replace(`/pf`);
            dispatch(deliverAlert('刪除成功','success',3000));
        }).catch(res => {
            ///401請先登入 400工作坊不存在
            if(res.status === 400){
                dispatch(deliverAlert('請先登入','warnig',3000));
            }
            else if(res.status === 401){
                dispatch(deliverAlert('工作坊不存在','danger',3000));
                history.replace(`/`);
            }
            else{
                dispatch(deliverAlert('讀取失敗','danger',3000));
                history.replace(`/`);
            }
            
        });
    });
    // let p = new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         resolve({ code: 200, u_id: 12345 });
    //     }, 600);
    // }).then(ret=>{
    //     return ret;
    // });
    // return{
    //     type: '@MANAGE/DELETE',
    //     payload: p.then(ret => {
    //         if (ret.code === 200) {
    //             alert("刪除成功");
    //             history.replace('');
    //             history.replace(`/pf`);
    //         }
    //     }),
    // }
}