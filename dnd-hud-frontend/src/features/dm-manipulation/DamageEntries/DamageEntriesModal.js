import * as React from 'react';
import {Component} from 'react';
import {Form, Modal} from "antd";
import DynamicForm from "../../common/DynamicForm";

const template = {
    layout: "vertical",
    controls: [
        {key: 'damage', label: 'Damage', type: 'number', min: 0, max: 10000}
    ]
};

class DamageEntriesModal extends Component {
    render() {
        const {visible, onCancel, onCreate: onDamage, form} = this.props;
        const {getFieldDecorator} = form;
        return (
            <Modal
                visible={visible}
                title="Damage Selected Entries"
                okText="Damage"
                onCancel={onCancel}
                onOk={onDamage}
            >
                <DynamicForm getFieldDecorator={getFieldDecorator} template={template}/>
            </Modal>
        )
    }
}

export default Form.create()(DamageEntriesModal);
