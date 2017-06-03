const initState = {
    masking:true
}
export default function workshopPage(state = initState, action) {
    switch (action.type) {
        case '@WORKSHOPPAGE/WORKSHOPPAGE_SUBMIT':
            return{
                ...state,
                attended:action.payload.attended,
            }
        case '@WORKSHOPPAGE/LOADING':
            return{
                ...state,
                masking:true
            }
        case '@WORKSHOPPAGE/LOADING_DONE':
            return{
                ...state,
                masking:false
            }
        default: return state;
    }
}
