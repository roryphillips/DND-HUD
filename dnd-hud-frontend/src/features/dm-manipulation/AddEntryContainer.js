import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withSocket} from "../common/withSocket";
import {socketAddCharacters} from "../../store/sagas/characters";
import {AddEntry} from "./AddEntry";

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
    return {
        addCharacter: (character) => {
            dispatch(socketAddCharacters(ownProps.socket, character));
        }
    };
}

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(AddEntryContainer));