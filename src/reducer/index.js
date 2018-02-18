import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counterReducer from './counter'
import startWars from './startWars'
import counterNick from './counterNick'

export default combineReducers({
    count: counterReducer,
    startWars,
    counterNick,
    router: routerReducer
})