import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from "antd";

class ShowEntries extends Component {
    constructor(props) {
        super(props);
        this.showCharacters = this.showCharacters.bind(this);
        this.hideCharacters = this.hideCharacters.bind(this);
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

export default connect(mapStateToProps)(ShowEntries);