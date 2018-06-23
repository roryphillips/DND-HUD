import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {CharacterList} from "../components/CharacterList";

class CharacterListContainer extends Component {
    dispatch;

    componentDidMount() {
        this.dispatch = this.props.dispatch;
    }

    render() {
        const { characters } = this.props;
        const allys = characters.filter(character => character.type === 'Ally');
        const enemies = characters.filter(character => character.type === 'Enemy');
        const neutral = characters.filter(character => character.type === 'Neutral');

        return (
            <div>
                <CharacterList items={}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: Object.keys(state.characters).map(key => {return {key, ...state.characters[key]}})
    };
}

export default connect(mapStateToProps)(CharacterListContainer);