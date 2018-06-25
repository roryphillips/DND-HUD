import * as React from 'react';
import {Component} from 'react';
import {Row, Col} from 'antd';
import AddEntryContainer from "./dm-manipulation/AddEntryContainer";
import CharacterListContainer from "./character-list/CharacterListContainer";
import DMSwitchContainer from "./dm-manipulation/DMSwitchContainer";

export class Root extends Component {
    render() {
        return (
            <div className="App">
                <DMSwitchContainer/>
                <Row gutter={16}>
                    {this.props.isDM &&
                    <Col span={3}>
                        <AddEntryContainer/>
                    </Col>}
                    <Col span={this.props.isDM ? 14 : 16}>
                        <CharacterListContainer/>
                    </Col>
                    <Col span={this.props.isDM ? 7 : 8}>
                        An Initiative Ladder Goes Here
                    </Col>
                </Row>
            </div>
        );
    }
}
