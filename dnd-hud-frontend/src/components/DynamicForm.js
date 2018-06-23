import * as React from 'react';
import {Component} from 'react';

import {Form, Input, InputNumber, Select} from 'antd';
const Option = Select.Option;

export class DynamicForm extends Component {
    formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
        }
    };

    renderControl(control) {
        switch (control.type) {
            case 'input':
                return this.renderInput(control);
            case 'select':
                return this.renderSelect(control);
            case 'number':
                return this.renderNumber(control);
        }
    }

    renderInput(control) {
        const onInput = (e) => {
            this.props.onChange(control.key, e.target.value);
        };
        return (
            <Input key={control.key} placeholder={control.placeholder} onChange={onInput}/>
        );
    }

    renderSelect(control) {
        const onSelect = (e) => {
            this.props.onChange(control.key, e);
        };
        return (
            <Select key={control.key} style={{width: '100%'}} onChange={onSelect}>
                {control.options.map((option, key) => {
                    return <Option key={key} value={option}>{option}</Option>
                })}
            </Select>
        );
    }

    renderNumber(control) {
        const onChange = (e) => {
            this.props.onChange(control.key, e);
        };
        return (
            <InputNumber min={control.min} max={control.max} defaultValue={control.min} onChange={onChange}/>
        )
    }

    render() {
        return (
            <Form onSubmit={this.props.onSubmit}>
                {this.props.input.map((control, key) => {
                    return (
                        <Form.Item
                            key={key}
                            label={control.label}
                            {...this.formItemLayout}>
                            {this.renderControl(control)}
                        </Form.Item>
                    );
                })}
            </Form>
        );
    }
}
