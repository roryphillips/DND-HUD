import { combineReducers } from 'redux';
import characters from './characters';
import ui from './ui';
export default combineReducers({
    characters,
    ui
});