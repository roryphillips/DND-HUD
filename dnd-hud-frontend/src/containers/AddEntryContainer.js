import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withSocket} from "./withSocket";
import {socketAddCharacters} from "../store/sagas/characters";
import {AddEntry} from "../components/AddEntry";

class AddEntryContainer extends Component {
    render() {
        return (
            <AddEntry {...this.props}/>
        )
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
        ...socketDispatch
    };
}

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(AddEntryContainer));