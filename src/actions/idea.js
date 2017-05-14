import history from '../history';
import { createIdea } from '../api/idea';
import { deliverAlert } from './alert';

export function comeUpWithIdea(idea) {
    return ((dispatch, getState) => {
        createIdea(getState().fb, idea).then(res => {
            dispatch({
                type: 'IDEA_COME_UP_WITH',
                payload: res.data,
            });
            history.replace(`i/${res.data.i_id}`);
            dispatch(deliverAlert('許願成功', 'success', 3000));
        }).catch(res => {
            dispatch(deliverAlert('許願失敗', 'danger', 3000));
        });
    });
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
    i_id = parseInt(i_id, 10);
    return {
        type: 'IDEA_DELETE',
        payload: 200,
    }
}

export function likeSearchIdea(i_id) {
    i_id = parseInt(i_id, 10);
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
    i_id = parseInt(i_id, 10);
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
                picture_url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14907205_1735976403393352_4070401399338628514_n.jpg?oh=a92d0f7cbf8c444eb53e3b93ba2a18dd&oe=597D50E5',
                name: '賴詰凱',
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
                picture_url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14907205_1735976403393352_4070401399338628514_n.jpg?oh=a92d0f7cbf8c444eb53e3b93ba2a18dd&oe=597D50E5',
                name: '林軒毅',
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
    i_id = parseInt(i_id, 10);
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
