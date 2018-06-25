import * as React from 'react';
import {Component} from 'react';
import {Card, Progress} from 'antd';

import './CharacterListItem.css';
export class CharacterListItem extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    calculatePercentage(value, outof) {
        return value / outof * 100;
    }

    getStatusForPercentage(percentage) {
        if (percentage < 25) {
            return 'exception';
        }
        if (percentage > 75) {
            return 'success';
        }
        return 'normal';
    }

    getDescriptionForPercentage(percentage) {
        if (percentage < 10) {
            return 'Badly Bruised and Haggard'
        }
        if (percentage < 20) {
            return 'Major Cuts'
        }
        if (percentage < 30) {
            return 'Wearing Out';
        }
        if (percentage < 40) {
            return 'Cuts and Bruises';
        }
        if (percentage < 50) {
            return 'Minor Cuts';
        }
        return 'Fit and Healthy';
    }

    onClick(e) {
        this.props.selectCharacter(this.props.id);
    }

    render() {
        const {character, isDM} = this.props;
        const hpPercentage = this.calculatePercentage(character.currentHealth, character.maximumHealth);
        return (
            <div className={this.props.isSelected ? 'selected-card' : ''} onClick={this.onClick}>
            {!isDM &&
                <Card  title={`${character.name}`}>
                    <p>{this.getDescriptionForPercentage(hpPercentage)}</p>
                </Card>
            }
            {isDM &&
                <Card title={`${character.name} - lvl. ${character.level}`} >
                    <Progress
                              percent={hpPercentage}
                              format={percent => `${character.currentHealth} / ${character.maximumHealth}`}
                              status={this.getStatusForPercentage(hpPercentage)}
                    />
                </Card>
            }
            </div>
        );
    }
}
