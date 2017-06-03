import {combineReducers} from 'redux';
import AlertReducer from './reducer_alert';
import ProfileReducer from './reducer_profile';
import {WorkshopListReducer, WorkshopShowReducer} from './reducer_workshop';
import {IdeaListReducer, IdeaShowReducer} from './reducer_idea';

const rootReducer = combineReducers({
    alert: AlertReducer,
    profile: ProfileReducer,
    ideaList: IdeaListReducer,
    ideaShow: IdeaShowReducer,
    workshopList: WorkshopListReducer,
    workshopShow: WorkshopShowReducer,
});

export default rootReducer;
