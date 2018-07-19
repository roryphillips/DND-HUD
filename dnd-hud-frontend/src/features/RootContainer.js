import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Root} from "./Root";

class RootContainer extends Component {
    dispatch;

    componentDidMount() {
        this.dispatch = this.props.dispatch;
    }

    render() {
        return (
            <Root {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFullScreen: state.ui.isFullScreen,
        isDM: state.ui.isDM
    };
}

export default connect(mapStateToProps)(RootContainer);