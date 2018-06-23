import * as React from 'react';
import {Component} from 'react';
import {CharacterListItem} from "./CharacterListItem";

import { Row, Col } from 'antd';

export class CharacterList extends Component {
    render() {
        return (
            <div style={{background: '#ECECEC', padding: '30px'}}>
                <h2>{this.props.name}</h2>
                <Row gutter={16}>
                {this.props.items.map((item, key) => {
                    return (
                        <Col key={key} span={8}><CharacterListItem character={item}/></Col>
                    )
                })}
                </Row>
            </div>
        );
    }
}
