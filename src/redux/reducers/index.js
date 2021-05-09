// 这个文件是用于汇总所有reducer的
import CountReducer from './Count_reducer';
import PersonReducer from './Person_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    count: CountReducer,
    person: PersonReducer
})