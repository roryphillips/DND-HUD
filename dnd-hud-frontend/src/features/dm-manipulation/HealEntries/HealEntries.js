import * as React from 'react';
import {Component} from 'react';
import DynamicForm from "../../common/DynamicForm";
import {Button, Modal} from 'antd';
import HealEntriesModal from "./HealEntriesModal";



export class HealEntries extends Component {
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

    handleHeal = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) return;
            form.resetFields();
            this.setState({visible: false});
            this.props.healCharacters(values.damage);
        })
    };

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div>
                <Button onClick={this.showModal}>Heal Selected Characters</Button>
                <HealEntriesModal
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onHeal={this.handleHeal}
                />
            </div>
        );
    }
}
