import {START_WARS, START, SUCCESS, FAIL} from '../constants'

export function loadStartWars() {
    return (dispatch) => {
        dispatch({
            type: START_WARS + START
        })

        fetch(`https://swapi.co/api/?format=json`)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(response => dispatch({
                type: START_WARS + SUCCESS,
                payload: { id, response }
            }))
            .catch(error => {
                dispatch({
                    type: START_WARS + FAIL,
                    payload: { id, error }
                })
                dispatch(replace('/error'))
            })
    }
}