export function showProfile() {
    return {
        type: 'PROFILE_SHOW',
        payload: {
            availableTime: [false, true, true, false, false, true, false, true, false, true, true, true, false, false, true, false, true, false, true, true, true],
            propose: [
                {
                    w_id: 12,
                    title: '特務獲利模式：第二關 - 王者談判力',
                    start_datetime: 'Sat May 13 2017 20:53:47 GMT+0800 (CST)',
                    min_number: 10,
                    max_number: 30,
                    deadline: 'Sat May 10 2017 20:53:47 GMT+0800 (CST)',
                    state: 0,
                    attendees_number: 0,
                },
                {
                    w_id: 13,
                    title: '天地人學堂：商業分析師的實戰工具與技巧培訓班#2',
                    start_datetime: 'Sat May 16 2017 20:00:00 GMT+0800 (CST)',
                    min_number: 10,
                    max_number: 50,
                    deadline: 'Sat May 15 2017 20:00:00 GMT+0800 (CST)',
                    state: 3,
                    attendees_number: 12,
                },
                {
                    w_id: 14,
                    title: '荷蘭 x 台灣 跨界思維新創品牌工作坊 New Brand Workshop',
                    start_datetime: 'Sat May 21 2017 09:00:00 GMT+0800 (CST)',
                    min_number: 20,
                    max_number: 40,
                    deadline: 'Sat May 15 2017 20:00:00 GMT+0800 (CST)',
                    state: 2,
                    attendees_number: 15,
                },
            ],
            attend: [
                {
                    w_id: 15,
                    title: 'TYS 5/20 聯合就業徵才媒合活動　正職Ｘ大學實習Ｘ高中職體驗',
                    start_datetime: 'Sat May 20 2017 20:53:47 GMT+0800 (CST)',
                    state: 3,
                },
            ],
            comeUpWith: [
                {
                    i_id: 1,
                    idea_type: 'teach',
                    skill: '畫畫',
                    like_number: '12',
                },
                {
                    i_id: 2,
                    idea_type: 'learn',
                    skill: '寫程式',
                    like_number: '9',
                },
            ],
            like: [
                {
                    i_id: 3,
                    idea_type: 'teach',
                    skill: '攝影',
                    like_number: '15',
                },
                {
                    i_id: 4,
                    idea_type: 'learn',
                    skill: '跳舞',
                    like_number: '3',
                },
            ],
        },
    }
}

export function updateAvailableTime(availableTime) {
    return {
        type: 'PROFILE_UPDATE_AVAILABLE_TIME',
        payload: availableTime,
    }
}
