
export default function workshopPage(state = null, action) {
    switch (action.type) {
        case '@WORKSHOPPAGE/WORKSHOPPAGE_SUBMIT':
            return{
                ...state, ///undoen
            }
        default: return state;
    }
}
