import {history} from '../common';
const initPropose={
    image_url:'',
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
export default function (state = initPropose, action) {
    switch (action.type) {
        case '@PROPOSE/PROPOSE_SUBMIT':
            if(action.payload.code===200){
                history.push(`wp/${action.payload.w_id}`)
            }
            break;
        case '@PROPOSE/PROPOSE_UPDATE':
            return {
                ...state,
                image_url:action.img,
                time:action.time,
                location:action.location,
                speaker:action.speaker,
                speachTitle:action.title,
                content:action.content,
///////wait for api
            };
        default: return state;

    }
}
