import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {socketDamageCharacters, socketHealCharacters} from "../../store/sagas/characters";
import {HealEntries} from "./HealEntries";
import {withSocket} from "../common/withSocket";

class HealEntriesContainer extends Component {
    dispatch;

    componentDidMount() {
        this.dispatch = this.props.dispatch;
    }

    render() {
        return (
            <HealEntries {...this.props}/>
        );
    }
}

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

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(HealEntriesContainer));