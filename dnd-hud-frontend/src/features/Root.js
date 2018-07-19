import * as React from 'react';
import {Component} from 'react';
import {Row, Col, Layout} from 'antd';
import AddEntryContainer from "./dm-manipulation/AddEntry/AddEntryContainer";
import CharacterListContainer from "./character-list/CharacterListContainer";
import DMSwitchContainer from "./dm-manipulation/DMSwitchContainer";
import DamageEntriesContainer from "./dm-manipulation/DamageEntries/DamageEntriesContainer";
import HealEntriesContainer from "./dm-manipulation/HealEntries/HealEntriesContainer";
import ShowEntriesContainer from "./dm-manipulation/ShowEntriesContainer";
import SetInitiativeContainer from "./initiative-tree/SetInitiative/SetInitiativeContainer";
import InitiativeListContainer from "./initiative-tree/InitiativeList/InitiativeListContainer";
import AdvanceInitiativeContainer from "./initiative-tree/AdvanceInitiative/AdvanceInitiativeContainer";

const { Header, Content, Footer } = Layout;

export class Root extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <h1 style={{display: 'inline-block', color: 'white', float: 'left'}}>DND HUD</h1>
                    <span style={{color: 'white', display: 'inline-block', float: 'right'}}>
                        <DMSwitchContainer/>
                    </span>

                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Row gutter={16}>
                        {this.props.isDM &&
                        <Col span={4} style={{textAlign: 'left'}}>
                            <AddEntryContainer/>
                            <DamageEntriesContainer/>
                            <HealEntriesContainer/>
                            <ShowEntriesContainer/>
                            <hr/>
                            <SetInitiativeContainer/>
                            <AdvanceInitiativeContainer/>
                        </Col>}
                        <Col span={this.props.isDM ? 20 : 24}>
                            <CharacterListContainer/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <InitiativeListContainer/>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    DND HUD ©2018 Created by Rory Phillips
                </Footer>
            </Layout>
        );
    }
}
