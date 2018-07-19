import { combineReducers } from 'redux';
import characters from './characters';
import ui from './ui';
import initiative from "./initiative";
export default combineReducers({
    characters,
    initiative,
    ui
});