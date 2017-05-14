export default function (state = null, action) {
    switch (action.type) {
        case 'ALERT_SHOW':
            return action.payload;
        case 'ALERT_HIDE':
            let next_state = JSON.parse(JSON.stringify(state));
            next_state.isOpen = action.payload;
            return next_state;
        default:
            return state;
    }
}
