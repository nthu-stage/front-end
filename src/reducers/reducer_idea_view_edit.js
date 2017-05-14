export default function (state = [], action) {
    let next_state;
    switch (action.type) {
        case 'IDEA_SHOW_VIEW_EDIT':
            next_state = Object.assign({}, action.payload);
            for (let times of next_state.mostAvaiTime) {
                times.name = ['一', '二', '三', '四', '五', '六', '日'][times.time % 7] + ['早', '午', '晚'][times.time % 3];
            }
            return next_state;
        case 'IDEA_LIKE_VIEW_EDIT':
            next_state = Object.assign({}, state);;
            if (next_state.i_id === action.payload.i_id) {
                next_state.like_number = action.payload.like_number;
                next_state.liked = action.payload.liked;
            }
            return next_state;
        default:
            return state;
    }
}
