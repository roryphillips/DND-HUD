import * as React from 'react';
import {Component} from 'react';
import {Switch} from "antd";

export class DMSwitch extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
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
            <div>
                <p>Enable DM Mode?</p>
                <Switch defaultChecked={this.props.isDM} onChange={this.onChange}/>
            </div>

        );
    }
}
