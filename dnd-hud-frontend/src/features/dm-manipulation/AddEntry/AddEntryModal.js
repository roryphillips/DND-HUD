import * as React from 'react';
import {Component} from "react";
import DynamicForm from "../../common/DynamicForm";
import {Form, Modal} from "antd";

const template = {
    layout: "vertical",
    controls: [
        {key: 'type', label: 'Type', type: 'select', options: ['Ally', 'Enemy', 'Neutral']},
        {key: 'name', label: 'Name', type: 'input'},
        {key: 'level', label: 'Level', type: 'number', min: 1, max: 20},
        {key: 'classText', label: 'Class', type: 'input'},
        {key: 'currentHealth', label: 'Curr. Health', type: 'number', min: 0, max: 999},
        {key: 'maximumHealth', label: 'Max. Health', type: 'number', min: 0, max: 999},
        {key: 'race', label: 'Race', type: 'input'},
        {key: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other']},
        {
            key: 'alignment', label: 'Alignment', type: 'select', options: [
                'Lawful Good', 'Neutral Good', 'Chaotic Good',
                'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
                'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
            ]
        },
        {key: 'faction', label: 'Faction', type: 'input'}
    ]
};

class AddEntryModal extends Component {
    render() {
        const {visible, onCancel, onCreate, form} = this.props;
        const {getFieldDecorator} = form;
        return (
            <Modal
                visible={visible}
                title="Add an entry"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <DynamicForm getFieldDecorator={getFieldDecorator} template={template}/>
            </Modal>
        )
    }
}

export default Form.create()(AddEntryModal);