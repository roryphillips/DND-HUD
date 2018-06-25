import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {socketDamageCharacters} from "../../store/sagas/characters";
import {DamageEntries} from "./DamageEntries";
import {withSocket} from "../common/withSocket";

class DamageEntriesContainer extends Component {
    dispatch;

    componentDidMount() {
        this.dispatch = this.props.dispatch;
    }

    render() {
        return (
            <DamageEntries {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        damageCharacters: (damage) => {
            dispatch(socketDamageCharacters(ownProps.socket, damage))
        }
    }
}

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(DamageEntriesContainer));