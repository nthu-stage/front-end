import {combineReducers} from 'redux';
import AlertReducer from './reducer_alert';
import ProfileReducer from './reducer_profile';
import WorkshopReducer from './reducer_workshop';
import IdeaSearchReducer from './reducer_idea_search';
import IdeaViewEditReducer from './reducer_idea_view_edit';
import WorkshopPageReducer from './reducer_workshopPage';
import WorkshopManageReducer from './reducer_workshopManage';
import ProposeReducer from './reducer_propose';
import AttendeeReducer from './reducer_attendee';

const rootReducer = combineReducers({
    alert: AlertReducer,
    profile: ProfileReducer,
    ideaSearch: IdeaSearchReducer,
    ideaViewEdit: IdeaViewEditReducer,
    workshop: WorkshopReducer,
    workshopPage: WorkshopPageReducer,
    workshopManage: WorkshopManageReducer,
    workshopPropose: ProposeReducer,
    workshopManageAttendee: AttendeeReducer
});

export default rootReducer;
