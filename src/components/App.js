import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import CounterNick from './NickCounter';
import 'react-select/dist/react-select.css'
import {ConnectedRouter} from 'react-router-redux'


import history from '../history'

class App extends Component {


    render() {
        console.log('---', 0)
        return (
            <ConnectedRouter history={history}>
                {/*<Counter/>*/}
                <CounterNick/>
            </ConnectedRouter>

        )
    }
}



export default App