function date2string(d) {
    return (
        d.getFullYear() + '/' +
        ('00' + (d.getMonth() + 1)).slice(-2) + '/' +
        ('00' + d.getDate()).slice(-2) + ' ' +
        ('00' + d.getHours()).slice(-2) + ':' +
        ('00' + d.getMinutes()).slice(-2) + ':' +
        ('00' + d.getSeconds()).slice(-2)
    );
}

export default function (state = null, action) {
    let next_state;
    switch (action.type) {
        case '@PROFILE/SHOW':
            next_state = JSON.parse(JSON.stringify(action.payload));
            next_state.propose.forEach(w => {
                w.start_datetime = date2string(new Date(w.start_datetime));
                w.deadline = date2string(new Date(w.deadline));
            });
            next_state.attend.forEach(w => {
                w.start_datetime = date2string(new Date(w.start_datetime));
            });
            return next_state;
        case '@PROFILE/UPDATE_AVAILABLE_TIME':
            next_state = JSON.parse(JSON.stringify(state));
            next_state.availableTime = action.payload;
            return next_state;
        case '@PROFILE/UPDATE_EMAIL':
            next_state = JSON.parse(JSON.stringify(state));
            next_state.email = action.payload.email;
            return next_state;
        default:
            return state;
    }
}
