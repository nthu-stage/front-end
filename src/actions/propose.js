import history from '../history';
export function ppSubmit(img_url,start_datetime,end_datetime,location,content,title,min_number,max_number,deadline,introduction,price){
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ code: 200, w_id: 12345 });
        }, 600);
    }).then(ret=>{
        return ret;
    });
    return{
        type: '@PROPOSE/SUBMIT',
        payload: p.then(ret => {
            if (ret.code === 200) {
                history.push(`wp/${ret.w_id}`);
            }
        }),
    }
        // return{
        //     type: '@PROPOSE/PROPOSE_SUBMIT',
        //     img_url:img_url,
        //     start_datetime:start_datetime,
        //     end_datetime:end_datetime,
        //     location:location,
        //     content:content,
        //     title:title,
        //     min_number:min_number,
        //     max_number:max_number,
        //     deadline:deadline,
        //     introduction:introduction,
        //     price:price,
        //     payload:{
        //         w_id:100000,
        //         code:200
        //         /////undone
        //     }


        // }
}
export function ppUpdate(img_url,start_datetime,end_datetime,location,content,title,min_number,max_number,deadline,introduction,price,w_id){
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ code: 200, w_id: 12345 });
        }, 600);
    }).then(ret=>{
        return ret;
    });
    return{
        type: '@MANAGE/UPDATE',
        img_url:img_url,
        start_datetime:start_datetime,
        end_datetime:end_datetime,
        location:location,
        content:content,
        title:title,
        min_number:min_number,
        max_number:max_number,
        deadline:deadline,
        introduction:introduction,
        price:price,
        payload: p.then(ret => {
            if (ret.code === 200) {
                history.push(`wm/${ret.w_id}`);
            }
        }),
    }
}
export function getPost(w_id){
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ 
                code: 200,
                w_id: 12345,
                img_url : "https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg", 
                date:'',
                startTime:'',
                endTime:'',
                location:'1',
                content:`最初，大地守護神化身SPIDER並降臨地球，為審判揭開序幕。

    人類無止盡的摧殘，導致世界陷入黑暗渾沌，為了將地球從猖狂的人類手中救出、於是，守護神化身成SPIDER，並且在2016審判日降臨，企圖將地球焚為灰燼後重生成樂土Arcadia，但是SPIDER以鐳射掃描人類後，發現Raver皆有著善良美麗的心，不過這樣仍不夠，SPIDER決定以火焰與雷電作為武裝，再次襲擊地球，讓人類臣服於SPIDER之下。於是，SPIDER再次汲取能量、蓄勢待發，劃破天際的『Lighting閃電風暴』展開新的奏章⋯⋯

    2017年11月11-12日 Arcadia 再度入侵，將再度震撼您的感官神經！`,
                title: 'kkkkkkk',
                start_datetime: '2017-11-11 18:11',
                end_datetime: '2017-11-11 18:11',
                min_number: '666',
                max_number: '888',
                deadline: '2017-11-11',
                introduction: '2. 公開分享此貼文，並標註兩個人並留言 @____ @____ 5/12､5/13快來台大音樂節玩，還有台灣虎航機票可以抽！！！',
                price: '10000',
            });
        }, 600);
    }).then(ret=>{
            return{
                type: '@MANAGE/INIT',
                img_url:ret.img_url,
                start_datetime:ret.start_datetime,
                end_datetime:ret.end_datetime,
                location:ret.location,
                content:ret.content,
                title:ret.title,
                min_number:ret.min_number,
                max_number:ret.max_number,
                deadline:ret.deadline,
                introduction:ret.introduction,
                price:ret.price,
            }
        });
}



