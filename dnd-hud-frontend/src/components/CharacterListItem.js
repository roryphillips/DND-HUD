import * as React from 'react';
import {Component} from 'react';
import {Card, Progress} from 'antd';

export class CharacterListItem extends Component {
    calculatePercentage(value, outof) {
        return value / outof * 100;
    }

    render() {
        const {character} = this.props;
        return (
            <Card title={character.name}>
                <Progress
                    type='circle'
                    format={percent => `${character.currentHealth} / ${character.maximumHealth}`}
                    percent={this.calculatePercentage(character.currentHealth, character.maximumHealth)}/>
            </Card>
        );
    }
}
