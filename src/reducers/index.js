import {combineReducers} from 'redux';
import AlertReducer from './reducer_alert';
import ProfileReducer from './reducer_profile';
import WorkshopReducer from './reducer_workshop';
import IdeaSearchReducer from './reducer_idea_search';
import IdeaViewEditReducer from './reducer_idea_view_edit';
import WorkshopPageReducer from './reducer_workshopPage';

const rootReducer = combineReducers({
    alert: AlertReducer,
    profile: ProfileReducer,
    ideaList: IdeaSearchReducer,
    ideaShow: IdeaViewEditReducer,
    workshopList: WorkshopReducer,
    workshopShow: WorkshopPageReducer,
});

export default rootReducer;
