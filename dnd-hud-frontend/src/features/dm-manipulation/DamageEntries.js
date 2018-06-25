import * as React from 'react';
import {Component} from 'react';
import {DynamicForm} from "../common/DynamicForm";
import {Button, Modal} from 'antd';

const form = [
    {key: 'damage', label: 'Damage', type: 'number', min: 0, max: 10000}
];

export class DamageEntries extends Component {
    state = {visible: false, damage: 0};

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        this.props.damageCharacters(this.state.damage || 0);
        this.state.damage = 0;
    };
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    updateDamage = (key, value) => {
        this.setState({
            ...this.state,
            damage: value
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.showModal}>Damage Characters</Button>
                <Modal
                    title="Damage Characters"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <DynamicForm input={form} onChange={this.updateDamage}/>
                </Modal>
            </div>
        );
    }
}
