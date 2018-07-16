import * as React from 'react';
import {Component} from 'react';
import DynamicForm from "../../common/DynamicForm";
import {Button, Modal} from 'antd';

const form = [
    {key: 'damage', label: 'Damage', type: 'number', min: 0, max: 10000}
];

export class DamageEntries extends Component {
    state = {modalVisible: false};

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    };

    handleCancel = (e) => {
        this.setState({
            modalVisible: false,
        });
    };

    onSubmit = (e) => {
        this.setState({
            modalVisible: false
        });
        console.log(e);
        this.props.damageCharacters(this.state.damage || 0);
    };

    render() {
        return (
            <div>
                <Button onClick={this.showModal}>Damage Characters</Button>
                <Modal
                    title="Damage Characters"
                    visible={this.state.modalVisible}
                    onCancel={this.handleCancel}
                    footer={[
                        <span key={1}>&nbsp;</span>,
                        <span key={2}>&nbsp;</span>
                    ]}
                >
                    <DynamicForm input={form} onSubmit={this.onSubmit}/>
                </Modal>
            </div>
        );
    }
}
