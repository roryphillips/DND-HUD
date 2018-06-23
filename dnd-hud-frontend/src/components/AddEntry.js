import * as React from 'react';
import {Component} from 'react';
import {Button, Modal} from 'antd';
import {DynamicForm} from "./DynamicForm";

const form = [
    {key: 'type', label: 'Type', type: 'select', options: ['Ally', 'Enemy', 'Neutral']},
    {key: 'name', label: 'Name', type: 'input'},
    {key: 'level', label: 'Level', type: 'number', min: 1, max: 20},
    {key: 'classText', label: 'Class', type: 'input'},
    {key: 'currentHealth', label: 'Curr. Health', type: 'number', min: 0, max: 999},
    {key: 'maximumHealth', label: 'Max. Health', type: 'number', min: 0, max: 999},
    {key: 'race', label: 'Race', type: 'input'},
    {key: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other']},
    {key: 'alignment', label: 'Alignment', type: 'select', options: [
        'Lawful Good', 'Neutral Good', 'Chaotic Good',
        'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
        'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
    ]},
    {key: 'faction', label: 'Faction', type: 'input'}
];

export class AddEntry extends Component {
    state = {visible: false, character: {}};
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        this.props.addCharacter(this.state.character);
        this.state.character = {};
    };
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };
    updateCharacter = (key, value) => {
        this.setState({
            ...this.state,
            character: {
                ...this.state.character,
                [key]: value
            }
        });
    };

    onSubmit = (e) => {
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Add Character</Button>
                <code>{JSON.stringify(this.state.character)}</code>
                <Modal
                    title="Add Character"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <DynamicForm input={form} onChange={this.updateCharacter} onSubmit={this.onSubmit}/>
                </Modal>
            </div>
        );
    }
}
