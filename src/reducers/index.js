import { combineReducers } from 'redux';
import language from './language';
import siteString from './siteString';

export default combineReducers({
    language,
    siteString
});
