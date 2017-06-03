import {combineReducers} from 'redux';
import AlertReducer from './reducer_alert';
import {loadingBarReducer} from 'react-redux-loading-bar'
import ProfileReducer from './reducer_profile';
import {WorkshopListReducer, WorkshopShowReducer} from './reducer_workshop';
import {IdeaListReducer, IdeaShowReducer} from './reducer_idea';

const rootReducer = combineReducers({
    alert: AlertReducer,
    loadingBar: loadingBarReducer,
    profile: ProfileReducer,
    ideaList: IdeaListReducer,
    ideaShow: IdeaShowReducer,
    workshopList: WorkshopListReducer,
    workshopShow: WorkshopShowReducer
});

export default rootReducer;
