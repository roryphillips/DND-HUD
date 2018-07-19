import * as React from 'react';
import {Component} from 'react';
import {Form, Modal} from "antd";
import {SetInitiativeForm} from "./SetInitiativeForm";

class SetInitiativeModal extends Component {
    render() {
        const {visible, onCancel, onCreate, form} = this.props;
        return (
            <Modal
                visible={visible}
                title="Set Initiative Order"
                okText="Set"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <SetInitiativeForm
                    onSubmit={onCreate}
                    form={form}
                />
            </Modal>
        );
    }
}

export default Form.create()(SetInitiativeModal)