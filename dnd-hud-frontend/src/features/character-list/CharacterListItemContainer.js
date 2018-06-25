import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {CharacterListItem} from "./CharacterListItem";
import {selectCharacter} from "../../store/actions/ui";

class CharacterListItemContainer extends Component {
    dispatch;

    componentDidMount() {
        this.dispatch = this.props.dispatch;
    }

    render() {
        return (
            <CharacterListItem {...this.props}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        character: state.characters[ownProps.id] || {},
        isSelected: state.ui.selectedCharacters.indexOf(ownProps.id) !== -1,
        isDM: state.ui.isDM
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        selectCharacter: (id) => dispatch(selectCharacter(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListItemContainer);