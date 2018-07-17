import * as React from 'react';
import {connect} from 'react-redux';
import {toggleDMMode} from "../../store/actions/ui";
import {DMSwitch} from "./DMSwitch";

function mapStateToProps(state) {
    return {
        isDM: state.ui.isDM
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggle: () => dispatch(toggleDMMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DMSwitch);