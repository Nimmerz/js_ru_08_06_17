import { NICK_INCREMENT, NICK_DECREMENT } from '../constants'

export default function counter (state=0, action) {
    switch (action.type) {
        case NICK_INCREMENT: {
            return state + 1;
        }
        case NICK_DECREMENT: {
            return state - 1;
        }
        default: {
            return state;
        }
    }
}


