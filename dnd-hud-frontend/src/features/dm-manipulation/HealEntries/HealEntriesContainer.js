import * as React from 'react';
import {connect} from 'react-redux';
import {socketHealCharacters} from "../../../store/sagas/characters";
import {HealEntries} from "./HealEntries";
import {withSocket} from "../../common/withSocket";

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        healCharacters: (damage) => {
            dispatch(socketHealCharacters(ownProps.socket, damage))
        }
    }
}

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(HealEntries));