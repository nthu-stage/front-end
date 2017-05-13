import history from '../history';

export default function (state = null, action) {
    let next_state;
    switch (action.type) {
        case 'IDEA_SEARCH':
            return action.payload;
        case 'IDEA_LIKE_SEARCH':
            next_state = state.slice();
            for (let idea of next_state) {
                if (idea.i_id === action.payload.i_id) {
                    idea.like_number = action.payload.like_number;
                    idea.liked = action.payload.liked;
                    break;
                }
            }
            return next_state;
        case 'IDEA_COME_UP_WITH':
            console.log('IDEA_COME_UP_WITH', action);
            next_state = state.slice();
            next_state.push({
                i_id: 123456,
                idea_type: 'teach',
                skill: '畫畫',
                goal: '素描',
                like_number: 12,
                liked: true,
            });
            return next_state;
        default:
            return state;
    }
}
