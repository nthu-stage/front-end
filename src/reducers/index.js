import {combineReducers} from 'redux';
import FbReducer from './reducer_fb'

const rootReducer = combineReducers({
    fb: FbReducer,
});

export default rootReducer;
