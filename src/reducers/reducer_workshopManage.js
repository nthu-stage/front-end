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

const initManage = {
    image_url: '',
    start_datetime: '',
    end_datetime: '',
    location: '',
    content: '',
    title: '',
    min_number: '',
    max_number: '',
    deadline: '',
    introduction: '',
    price: ''
}

export default function workshopManage(state = initManage, action) {
    let next_state;
    switch (action.type) {
        case '@MANAGE/UPDATE':
            return action.payload;
        case '@MANAGE/INIT':
            next_state = JSON.parse(JSON.stringify(action.payload));
            next_state.start_datetime = date2string(new Date(next_state.start_datetime));
            next_state.end_datetime = date2string(new Date(next_state.end_datetime));
            next_state.deadline = date2string(new Date(next_state.deadline));
            return next_state;
        default:
            return state;
    }
}
