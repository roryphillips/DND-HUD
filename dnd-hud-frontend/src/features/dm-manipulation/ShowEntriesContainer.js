import * as React from 'react';
import {connect} from 'react-redux';
import {socketShowHideCharacters} from "../../store/sagas/characters";
import {withSocket} from "../common/withSocket";
import ShowEntries from "./ShowEntries";

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggleVisibility: (visibility) => { dispatch(socketShowHideCharacters(ownProps.socket, visibility)) }
    }
}

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(ShowEntries));