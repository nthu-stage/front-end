
export default function workshopPage(state = null, action) {
    switch (action.type) {
        case '@WORKSHOPPAGE/WORKSHOP_SUBMIT':
            return{
                ...state, ///undoen
            }
    }
    return state;
}
