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

class HealEntriesModal extends Component {
    render() {
        const {visible, onCancel, onHeal, form} = this.props;
        const {getFieldDecorator} = form;
        return (
            <Modal
                visible={visible}
                title="Heal Selected Entries"
                okText="Heal"
                onCancel={onCancel}
                onOk={onHeal}>
                <DynamicForm getFieldDecorator={getFieldDecorator} template={template}/>
            </Modal>
        );
    }
}

export default Form.create()(HealEntriesModal);