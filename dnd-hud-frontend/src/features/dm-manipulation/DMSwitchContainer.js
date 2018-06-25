import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {toggleDMMode} from "../../store/actions/ui";
import {Switch} from 'antd';

class DMSwitchContainer extends Component {
    dispatch;

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.dispatch = this.props.dispatch;
    }

    onChange(checked) {
        if (!this.props.isDM && checked) {
            this.props.toggle();
        }
        if (this.props.isDM && !checked) {
            this.props.toggle();
        }
    }

    render() {
        return (
            <Switch defaultChecked={this.props.isDM} onChange={this.onChange}/>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(DMSwitchContainer);