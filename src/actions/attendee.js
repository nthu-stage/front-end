export function getAttendee(w_id){
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ code: 200, list:[{"name":"haha","email":"a@gmail"},{"name":"3","email":"b@gmail"}]});
        }, 600);
    }).then(ret=>{
        return ret;
    });
    return{
        type: '@ATTENDEELIST/GET_LIST',
        payload: p,
    }
}