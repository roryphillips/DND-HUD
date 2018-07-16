import * as React from 'react';
import {Component} from 'react';
import {Button, Modal} from 'antd';
import DamageEntriesModal from "./DamageEntriesModal";



export class DamageEntries extends Component {
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

    handleDamage = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) return;
            form.resetFields();
            this.setState({visible: false});
            this.props.damageCharacters(values.damage);
        });
    };

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    };


    render() {
        return (
            <div>
                <Button onClick={this.showModal}>Damage Selected Characters</Button>
                <DamageEntriesModal
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onDamage={this.handleDamage}
                />
            </div>
        );
    }
}
