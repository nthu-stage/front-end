export default function (state = [], action) {
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
