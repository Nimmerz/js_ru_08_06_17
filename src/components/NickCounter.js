import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {createStore} from 'redux';
import {increment, decrement} from '../AC/counterNick';





class CounterNick extends Component {

    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func,
        decrement: PropTypes.func,
    }

    render() {
        return (
            <div>
                <button onClick={this.props.decrement}>-</button>
                {this.props.count}
                <button onClick={this.props.increment}>+</button>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        count: state.counterNick
    }
}, {
    increment,
    decrement
})(CounterNick);