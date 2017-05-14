import history from '../history';
export function wsDelete(id){
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ code: 200, u_id: 12345 });
        }, 600);
    }).then(ret=>{
        return ret;
    });
    return{
        type: '@MANAGE/DELETE',
        payload: p.then(ret => {
            if (ret.code === 200) {
                alert("刪除成功");
                history.replace('');
                history.replace(`pf/${ret.u_id}`);
            }
        }),
    }
}