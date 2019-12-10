import {createStore,combineReducers} from 'redux';
import adminReducer from './Reducers/AdminReducer';
import imgReducer from './Reducers/imgreducer'

let rootReducer = combineReducers({adminReducer ,imgReducer})
let store = createStore(rootReducer);

export default store;