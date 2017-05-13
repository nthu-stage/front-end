
export default function workshopPage(state = null, action) {
    switch (action.type) {
        case '@WORKSHOPPAGE/WORKSHOPPAGE_SUBMIT':
        console.log(action.payload);
            return{
                ...state,
                attended:action.payload.attended,
            }
        default: return state;
    }
}
