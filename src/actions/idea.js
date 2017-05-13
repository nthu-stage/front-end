import history from '../history';

export function comeUpWithIdea(idea) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ code: 200, i_id: 12345 });
        }, 1000);
    }).then(ret => {
        return ret;
    });

    return {
        type: 'IDEA_COME_UP_WITH',
        payload: p.then(ret => {
            if (ret.code === 200) {
                history.replace(`i/${ret.i_id}`);
            }
        }),
    }
}

export function searchIdea(searchText, order) {
    return {
        type: 'IDEA_SEARCH',
        payload: [
            {
                i_id: 12345,
                idea_type: 'teach',
                skill: '畫畫',
                goal: '素描',
                like_number: 12,
                liked: true,
            },
            {
                i_id: 12,
                idea_type: 'learn',
                skill: '寫程式',
                goal: '寫出 Facebook',
                like_number: 9,
                liked: false,
            },
        ],
    }
}

export function updateIdea(idea) {
    return {
        type: 'IDEA_COME_UP_WITH',
        payload: 200,
    }
}

export function deleteIdea(i_id) {
    i_id = parseInt(i_id);
    return {
        type: 'IDEA_DELETE',
        payload: 200,
    }
}

export function likeSearchIdea(i_id) {
    i_id = parseInt(i_id);
    return {
        type: 'IDEA_LIKE_SEARCH',
        payload: {
            i_id: 12,
            like_number: 10,
            liked: true,
        }
    }
}

export function showViewEditIdea(i_id) {
    i_id = parseInt(i_id);
    console.log('showViewEditIdea', i_id);
    if (i_id === 12345) {
        return {
            type: 'IDEA_SHOW_VIEW_EDIT',
            payload: {
                i_id: 12345,
                idea_type: 'teach',
                skill: '畫畫',
                goal: '素描',
                like_number: 12,
                web_url: 'http://web_url/',
                image_url: 'http://image_url/',
                liked: true,
                isEditor: false,
                mostAvaiTime: [
                    {time: 0, people: 12},
                    {time: 4, people: 8},
                    {time: 6, people: 4},
                    {time: 9, people: 3},
                    {time: 20, people: 1},
                ],
            },
        }
    } else if (i_id === 12) {
        return {
            type: 'IDEA_SHOW_VIEW_EDIT',
            payload: {
                i_id: 12,
                idea_type: 'teach',
                skill: '寫程式',
                goal: '寫出 Facebook',
                like_number: 9,
                web_url: 'http://web_url/',
                image_url: 'http://image_url/',
                liked: false,
                isEditor: true,
                mostAvaiTime: [
                    {time: 0, people: 17},
                    {time: 5, people: 16},
                    {time: 10, people: 10},
                    {time: 15, people: 5},
                    {time: 18, people: 1},
                ],
            },
        }
    }
    return {type: 'IDEA_SHOW_VIEW_EDIT', payload: null};
}

export function likeViewEditIdea(i_id) {
    i_id = parseInt(i_id);
    if (i_id === 12345) {
        return {
            type: 'IDEA_LIKE_VIEW_EDIT',
            payload: {
                i_id: 12345,
                like_number: 11,
                liked: false,
            }
        }
    } else if (i_id === 12) {
        return {
            type: 'IDEA_LIKE_VIEW_EDIT',
            payload: {
                i_id: 12,
                like_number: 10,
                liked: true,
            }
        }
    }
    return {type: 'IDEA_LIKE_VIEW_EDIT', payload: null};
}
