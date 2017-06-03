import moment from 'moment';

function date2string(d) {
    return (d.getFullYear() + '/' + ('00' + (d.getMonth() + 1)).slice(-2) + '/' + ('00' + d.getDate()).slice(-2) + ' ' + ('00' + d.getHours()).slice(-2) + ':' + ('00' + d.getMinutes()).slice(-2) + ':' + ('00' + d.getSeconds()).slice(-2));
}

export function WorkshopListReducer(state = null, action) {
    switch (action.type) {
        case '@WORKSHOP/LIST':
            return action.payload;
        default:
            return state;
    }
}

export function WorkshopShowReducer(state = {}, action) {
    let next_state;
    switch (action.type) {
        case '@WORKSHOP/SHOW':
            next_state = JSON.parse(JSON.stringify(action.payload));
            let start_datetime = new Date(next_state.start_datetime),
                end_datetime = new Date(next_state.end_datetime),
                deadline = new Date(next_state.deadline);
            next_state.start_datetime = date2string(start_datetime);
            next_state.end_datetime = date2string(end_datetime);
            next_state.deadline = date2string(deadline);
            next_state.start_date = moment(start_datetime).format('YYYY-MM-DD');
            next_state.start_time = moment(start_datetime).format('hh:mm:ss');
            next_state.end_date = moment(end_datetime).format('YYYY-MM-DD');
            next_state.end_time = moment(end_datetime).format('hh:mm:ss');
            next_state.deadline_date = moment(deadline).format('YYYY-MM-DD');
            next_state.deadline_time = moment(deadline).format('hh:mm:ss');
            return next_state;
        case '@WORKSHOP/ATTEND':
            return {
                ...state,
                attended: action.payload.attended
            };
        case '@WORKSHOP/ATTENDEE':
            return {
                ...state,
                attendees: action.payload.list
            };
        default:
            return state;
    }
}
