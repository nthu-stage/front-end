import {combineReducers} from 'redux';
import FbReducer from './reducer_fb';
import WorkshopPageReducer from './reducer_workshopPage';
import WorkshopManageReducer from './reducer_workshopManage';

const rootReducer = combineReducers({
    fb: FbReducer,
    ws: WorkshopPageReducer,
    wm: WorkshopManageReducer,
});

export default rootReducer;
