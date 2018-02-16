import {INCREMENT} from '../constants'
import {push, replace} from 'react-router-redux'

export function increment() {
    return {
        type: INCREMENT
    }
}