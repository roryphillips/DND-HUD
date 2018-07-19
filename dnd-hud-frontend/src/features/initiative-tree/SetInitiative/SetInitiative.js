import * as React from 'react';
import {Component} from 'react';
import Button from "antd/es/button/button";
import SetInitiativeModal from "./SetInitiativeModal";

export class SetInitiative extends Component {
    state = {visible: false};

    constructor(props) {
        super(props);
    }

    showModal = () => {
        this.setState({visible: true});
    };

    handleCancel = () => {
        this.setState({visible: false});
    };

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) return;
            const response = values.keys.map(key => {
                return {
                    name: values.names[key],
                    score: Number.parseInt(values.scores[key])
                };
            });
            form.resetFields();
            this.setState({visible: false});
            this.props.setInitiative(response);
        });
    };

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Set Initiative</Button>
                <SetInitiativeModal
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}
