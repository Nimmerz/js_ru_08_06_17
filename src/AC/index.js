import {INCREMENT} from '../constants';
import {DECREMENT} from '../constants';
import {push, replace} from 'react-router-redux'

export function increment() {
    return {
        type: INCREMENT,
        params: ['Kolian'],
    }
}

export function decrement() {
    return {
        type: DECREMENT,
    }
}

