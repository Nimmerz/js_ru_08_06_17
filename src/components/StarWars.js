import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {loadStartWars} from '../AC/startWars';





class StarWars extends Component {
    static propTypes = {
        id: PropTypes.string,
        loadStartWars: PropTypes.func,
    };
    render() {
        return (
            <div>
                {this.props.id}
                <p>
                {this.props.loadStartWars}
                </p>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        count: state.startWars
    }
}, {
    loadStartWars
})(StarWars);