import history from '../history';

export default function (state = null, action) {
    switch (action.type) {
        case 'IDEA_SEARCH':
            return action.payload;
        case 'IDEA_LIKE_SEARCH':
            let next_state = state.slice();
            for (let idea of next_state) {
                if (idea.i_id === action.payload.i_id) {
                    idea.like_number = action.payload.like_number;
                    idea.liked = action.payload.liked;
                    break;
                }
            }
            return next_state;
        case 'IDEA_COME_UP_WITH':
            if (action.payload.code === 200) {
                history.push(`i/${action.payload.i_id}`);
            }
        default:
            return state;
    }
}
