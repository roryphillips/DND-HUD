import * as React from 'react';
import {Component} from 'react';
import {Button} from "antd";
import AddEntryModal from "./AddEntryModal";


export class AddEntry extends Component {
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
            console.log(values);
            form.resetFields();
            this.setState({visible: false});
            this.props.addCharacter(values);
        });
    };

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Add Entry</Button>
                <AddEntryModal
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}
