const init={
    attendees:[],
}
export default function AttendeeReducer(state = init, action){
    switch(action.type){
        case '@ATTENDEELIST/GET_LIST':
            console.log('reducer:',action.payload.list)
            return{
                ...state,
                attendees:action.payload.list
            }
        default: return state;
    }
}