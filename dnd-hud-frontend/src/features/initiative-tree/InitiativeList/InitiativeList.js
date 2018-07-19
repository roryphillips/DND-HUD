import * as React from 'react';
import {Component} from 'react';

export class InitiativeList extends Component {
    render() {
        const {isDM} = this.props;
        const {currentTurn, initiativeOrder} = this.props.initiative || {};
        const sortedInitiative = initiativeOrder.sort((a, b) => a.score > b.score);
        const initiative = [
            ...sortedInitiative.slice(currentTurn, initiativeOrder.length),
            ...sortedInitiative.slice(0, currentTurn)
        ];

        return (
            <div>

                {!isDM && initiative.length > 0 && (
                    <h2>Current Turn:</h2>
                )}
                {!isDM && initiative.length > 0 && (
                    <h3>{initiative[0].name || ''}</h3>
                )}
                {isDM && (
                    <h2>Initiative Order</h2>
                )}
                {isDM && initiative.map((entry, index) => {
                    return <div key={entry.name}><p>
                        {index === 0 && 'Current Turn: '}
                        {index === 1 && 'Next Turn: '}
                        <b>{entry.name}</b></p></div>
                })}
            </div>
        );
    }
}
