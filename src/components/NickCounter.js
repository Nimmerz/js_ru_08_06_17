import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createStore} from 'redux';
import {increment} from '../AC';
import {decrement} from '../AC';



function counter (state=0, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return state + 1;
        }
        case 'DECREMENT': {
            return state - 1;
        }
        default: {
            return state;
        }
    }
}

const store = createStore(counter);

class CounterNick extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.dispatch({type: 'DECREMENT'})}>-</button>
                {this.props.count}
                <button onClick={() => this.props.dispatch({type: 'INCREMENT'})}>+</button>
            </div>
        );
    }
}

export default connect((state) => ({ count: state}),
{
    increment,
    decrement
})(Counter)(CounterNick);