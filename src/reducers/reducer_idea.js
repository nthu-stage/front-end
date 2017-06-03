export function IdeaListReducer(state = [], action) {
    let next_state;
    switch (action.type) {
        case '@IDEA/LIST':
            return action.payload;
        case '@IDEA/LIKE_LIST':
            next_state = state.slice();
            for (let idea of next_state) {
                if (idea.i_id === parseInt(action.payload.i_id, 10)) {
                    idea.like_number = action.payload.like_number;
                    idea.liked = action.payload.liked;
                    break;
                }
            }
            return next_state;
        default:
            return state;
    }
}

export function IdeaShowReducer(state = null, action) {
    let next_state;
    switch (action.type) {
        case '@IDEA/SHOW':
            next_state = Object.assign({}, action.payload);
            console.log('IDEA_SHOW_VIEW_EDIT', next_state.mostAvaiTime);
            for (let times of next_state.mostAvaiTime) {
                times.name = ['一', '二', '三', '四', '五', '六', '日'][Math.floor(times.time / 3)] + ['早', '午', '晚'][times.time % 3];
            }
            return next_state;
        case '@IDEA/LIKE_SHOW':
            next_state = Object.assign({}, state);;
            next_state.like_number = action.payload.like_number;
            next_state.liked = action.payload.liked;
            return next_state;
        default:
            return state;
    }
}
