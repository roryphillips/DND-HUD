import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {withSocket} from "../../common/withSocket";
import {AdvanceInitiative} from "./AdvanceInitiative";
import {socketAdvanceInitiative} from "../../../store/sagas/initiative";

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        advanceInitiative: () => dispatch(socketAdvanceInitiative(ownProps.socket))
    };
}

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(AdvanceInitiative));