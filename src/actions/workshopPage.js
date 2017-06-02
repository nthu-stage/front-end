import {deliverAlert} from './alert';
import {isAttended} from '../api/workshop'

export function wspSubmit(w_id) {
    return ((dispatch, getState) => {
        if (getState().fb) {
            isAttended(getState().fb, w_id).then(res => {
                dispatch({type: '@WORKSHOPPAGE/WORKSHOPPAGE_SUBMIT', payload: res.data});
                if (res.data.attended) {
                    dispatch(deliverAlert('報名成功', 'success', 3000));
                } else {
                    dispatch(deliverAlert('已取消報名', 'warning', 3000));
                }
            }).catch(err => {
                switch (err.response.status) {
                    case 400:
                        dispatch(deliverAlert('內容有誤', 'danger', 3000));
                        break;
                    default:
                        dispatch(deliverAlert('搜尋失敗', 'danger', 3000));
                }
            });
        } else {
            dispatch(deliverAlert('請先登入', 'warning', 3000));
        }
    });
}
