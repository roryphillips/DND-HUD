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
        const { characters, isDM } = this.props;
        const visibleCharacters = characters.filter(character => character.isVisible || isDM);
        const allies = visibleCharacters.filter(character => character.type === 'Ally' );
        const enemies = visibleCharacters.filter(character => character.type === 'Enemy');
        const neutral = visibleCharacters.filter(character => character.type === 'Neutral');

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
        isDM: state.ui.isDM,
        characters: Object.keys(state.characters).map(key => {
            const character = state.characters[key];
            return {
                id: key,
                type: character.type,
                isVisible: character.isVisible
            };
        })
    };
}

export default connect(mapStateToProps)(CharacterListContainer);