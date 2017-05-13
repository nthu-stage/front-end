import history from '../history';
const initManage={
    img_url:'',
    start_datetime:'',
    end_datetime:'',
    location:'',
    content:'',
    title:'',
    min_number:'',
    max_number:'',
    deadline:'',
    introduction:'',
    price:''
}
export default function workshopManage(state = initManage, action) {
    switch (action.type) {
        case '@MANAGE/UPDATE':
            return{
                ...state,
                img_url:action.img_url,
                start_datetime:action.start_datetime,
                end_datetime:action.end_datetime,
                location:action.location,
                content:action.content,
                title:action.title,
                min_number:action.min_number,
                max_number:action.max_number,
                deadline:action.deadline,
                introduction:action.introduction,
                price:action.price,
            }
        case '@MANAGE/INIT':
            return{
                ...state,
                img_url:action.img_url,
                start_datetime:action.start_datetime,
                end_datetime:action.end_datetime,
                location:action.location,
                content:action.content,
                title:action.title,
                min_number:action.min_number,
                max_number:action.max_number,
                deadline:action.deadline,
                introduction:action.introduction,
                price:action.price,
            }
        default: return state;
    }
}
