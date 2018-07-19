import * as React from 'react';
import {connect} from 'react-redux';
import {InitiativeList} from "./InitiativeList";

function mapStateToProps(state, ownProps) {
    console.log(state.initiative);

    return {
        initiative: state.initiative
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeList);