export default function (state = null, action) {
    switch (action.type) {
        case 'FB_LOGIN':
            return action.payload;
        default:
            return state;
    }
}
