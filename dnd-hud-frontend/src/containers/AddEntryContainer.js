import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withSocket} from "./withSocket";
import {socketAddCharacters} from "../store/sagas/characters";

class AddEntryContainer extends Component {
    dispatch;

    componentDidMount() {
        this.dispatch = this.props.dispatch;
    }

    render() {
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    const baseDispatch = {

    };

    const socketDispatch = {
        addCharacter: (character) => {
            dispatch(socketAddCharacters(ownProps.socket, character));
        }
    };

    return {
        ...baseDispatch,
        ...(!!ownProps.socket ? socketDispatch : {})
    };
}

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(AddEntryContainer));