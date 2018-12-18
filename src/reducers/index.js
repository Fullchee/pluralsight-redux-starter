import {combineReducers} from 'redux';
import courses from './courseReducer';

// this.state.courses

const rootReducer = combineReducers({
    courses: courses
});

export default rootReducer;