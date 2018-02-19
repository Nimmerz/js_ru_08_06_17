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

    renderList = () => {
        const {list} = this.props
        return Object.values(list).map((item) => {
            return (
                <p>
                    {item}
                </p>)
        })
    }

    render() {

        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

export default connect(state => ({list: state.startWars.list}), {loadStartWars})(StarWars);