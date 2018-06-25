import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {CharacterList} from "./CharacterList";

class CharacterListContainer extends Component {
    dispatch;

    componentDidMount() {
        this.dispatch = this.props.dispatch;
    }

    render() {
        const { characters } = this.props;
        const allies = characters.filter(character => character.type === 'Ally');
        const enemies = characters.filter(character => character.type === 'Enemy');
        const neutral = characters.filter(character => character.type === 'Neutral');

        return (
            <div>
                {allies.length > 0 && <CharacterList name="Allies" items={allies}/>}
                {enemies.length > 0 && <CharacterList name="Enemies" items={enemies}/>}
                {neutral.length > 0 && <CharacterList name="Neutral" items={neutral}/>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: Object.keys(state.characters).map(key => {
            const character = state.characters[key];
            return {
                id: key,
                type: character.type
            };
        })
    };
}

export default connect(mapStateToProps)(CharacterListContainer);