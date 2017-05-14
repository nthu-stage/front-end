import { getAttendeeFromApi } from '../api/workshop';
import { deliverAlert } from './alert.js';
export function getAttendee(w_id){
    return((dispatch, getState) => {
        if(getState().fb){
            getAttendeeFromApi(getState().fb,w_id).then(res => {
                dispatch({
                    type: '@ATTENDEELIST/GET_LIST',
                    payload: res.data,
                });
            })
        } else {
            history.replace('/');
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
    // let p = new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         resolve({ code: 200, list:[{"name":"haha","email":"a@gmail"},{"name":"3","email":"b@gmail"}]});
    //     }, 600);
    // }).then(ret=>{
    //     return ret;
    // });
    // return{
    //     type: '@ATTENDEELIST/GET_LIST',
    //     payload: p,
    // }
}