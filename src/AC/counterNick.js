import {NICK_INCREMENT, NICK_DECREMENT} from '../constants';
import {push, replace} from 'react-router-redux'


export function increment() {
    return {
        type: NICK_INCREMENT,
        params: ['Kolian'],
    }
}

export function decrement() {
    return {
        type: NICK_DECREMENT,
    }
}

