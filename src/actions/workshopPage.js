export function wspSubmit(){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ code: 200, attended:true });
        }, 500);
    }).then(ret => {
        if(ret.code===200){
            if(ret.attended === true) alert("已成功報名");
            else alert("沒關係下次還有機會QQ")
        }
        return ret;
    });
    return{
        type: '@WORKSHOPPAGE/WORKSHOPPAGE_SUBMIT',
        payload:p,
    }
}