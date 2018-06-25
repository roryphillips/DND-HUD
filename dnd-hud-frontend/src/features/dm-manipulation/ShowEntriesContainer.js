import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {socketShowHideCharacters} from "../../store/sagas/characters";
import {Button} from 'antd';
import {withSocket} from "../common/withSocket";

class ShowEntriesContainer extends Component {
    dispatch;

    constructor(props) {
        super(props);
        this.showCharacters = this.showCharacters.bind(this);
        this.hideCharacters = this.hideCharacters.bind(this);
    }

    componentDidMount() {
        this.dispatch = this.props.dispatch;
    }

    showCharacters(e) {
        this.props.toggleVisibility(true);
    }

    hideCharacters(e) {
        this.props.toggleVisibility(false);
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.showCharacters}>Show Characters</Button>
                <Button onClick={this.hideCharacters}>Hide Characters</Button>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggleVisibility: (visibility) => { dispatch(socketShowHideCharacters(ownProps.socket, visibility)) }
    }
}

export default withSocket(connect(mapStateToProps, mapDispatchToProps)(ShowEntriesContainer));