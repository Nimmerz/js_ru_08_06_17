import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {loadStartWars} from '../AC/startWars';


class StarWars extends Component {
    static propTypes = {
        loadStartWars: PropTypes.func,
    };

    componentDidMount() {
        this.props.loadStartWars();
    }

    render() {
        return (
            <div>
                {this.props.startWars.list}
            </div>
        );
    }
}

export default connect(state => ({startWars: state.startWars}), {loadStartWars})(StarWars);