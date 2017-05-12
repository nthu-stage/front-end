export default function (state = null, action) {
    switch (action.type) {
        case 'WORKSHOP_SEARCH':
            return action.payload;
        default:
            return state;
    }
}
