import * as React from 'react';
import {Component} from 'react';
import {Button, Modal} from 'antd';

export class AddEntry extends Component {
    state = { visible: false, character: {} };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
        this.props.addCharacter(this.state.character);
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Add Character</Button>
                <Modal
                    title="Add Character"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>

                </Modal>
            </div>
        );
    }
}
