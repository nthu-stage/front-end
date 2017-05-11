import {combineReducers} from 'redux';
import FbReducer from './reducer_fb';
import WorkshopPageReducer from './reducer_workshopPage';

const rootReducer = combineReducers({
    fb: FbReducer,
    ws: WorkshopPageReducer,
});

export default rootReducer;
