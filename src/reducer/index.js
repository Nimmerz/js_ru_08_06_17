import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counterReducer from './counter'
import startWars from './startWars'

export default combineReducers({
    count: counterReducer,
    startWars,
    router: routerReducer
})