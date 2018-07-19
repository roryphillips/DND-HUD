import * as React from 'react';
import {Component} from 'react';
import {Button} from "antd";

export class AdvanceInitiative extends Component {
    render() {
        const {advanceInitiative} = this.props;
        return (
            <div>
                <Button onClick={advanceInitiative}>Next Turn</Button>
            </div>
        );
    }
}
