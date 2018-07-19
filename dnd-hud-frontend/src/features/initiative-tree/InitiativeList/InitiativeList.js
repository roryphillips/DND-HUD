import * as React from 'react';
import {Component} from 'react';

export class InitiativeList extends Component {
    getSortScore(currentTurn, initiative) {
        
    }

    sortInitiative = (currentTurn, initiativeOrder) => {
        return initiativeOrder.sort((a, b) => {
            return this.getSortScore(currentTurn, b) - this.getSortScore(currentTurn, a);
        });
    };

    render() {
        const {currentTurn, initiativeOrder} = this.props.initiative || {};
        const initiative = this.sortInitiative(currentTurn || 0, initiativeOrder || []);

        return (
            <div>
                <h3>Initiative Order</h3>
                    {initiative.map((entry, index) => {
                        return <div key={entry.name}><p><b>#{index + 1}. {entry.name}</b></p></div>
                    })}
            </div>

        );
    }
}
