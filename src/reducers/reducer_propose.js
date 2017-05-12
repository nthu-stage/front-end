const initPropose={
    imgUrl:'',
    date:'',
    time:'',
    location:'',
    speaker:'',
    speachTitle:'',
    content:'',
}
export default function (state = initPropose, action) {
    switch (action.type) {
        case '@PROPOSE/PROPOSE_SUBMIT':
            return {
                ...state,
                imgUrl:action.img,
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
