import * as React from 'react';
import {connect} from 'react-redux';
import {SetInitiative} from "./SetInitiative";
import {socketSetInitiative} from "../../../store/sagas/initiative";
import {withSocket} from "../../common/withSocket";

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        setInitiative: (initiativeOrder) => dispatch(socketSetInitiative(ownProps.socket, initiativeOrder))
    };
}

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(SetInitiative));