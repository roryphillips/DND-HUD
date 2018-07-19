import * as React from 'react';
import {Component} from 'react';
import {Checkbox, Switch} from "antd";

export class DMSwitch extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const checked = e.target.checked;
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
                <span>Enable DM Mode?</span>
                <Checkbox defaultChecked={this.props.isDM} onChange={this.onChange}/>
            </div>

        );
    }
}
