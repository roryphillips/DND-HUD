import * as React from 'react';
import {Component} from 'react';
import {Row, Col} from 'antd';
import AddEntryContainer from "./dm-manipulation/AddEntryContainer";
import CharacterListContainer from "./character-list/CharacterListContainer";
import DMSwitchContainer from "./dm-manipulation/DMSwitchContainer";
import DamageEntriesContainer from "./dm-manipulation/DamageEntriesContainer";
import HealEntriesContainer from "./dm-manipulation/HealEntriesContainer";
import ShowEntriesContainer from "./dm-manipulation/ShowEntriesContainer";

export class Root extends Component {
    render() {
        return (
            <div className="App">
                <DMSwitchContainer/>
                <Row gutter={16}>
                    {this.props.isDM &&
                    <Col span={3} style={{textAlign: 'left'}}>
                        <AddEntryContainer/>
                        <DamageEntriesContainer/>
                        <HealEntriesContainer/>
                        <ShowEntriesContainer/>
                    </Col>}
                    <Col span={this.props.isDM ? 16 : 18}>
                        <CharacterListContainer/>
                    </Col>
                    <Col span={this.props.isDM ? 5 : 6}>
                        An Initiative Ladder Goes Here
                    </Col>
                </Row>
            </div>
        );
    }
}
