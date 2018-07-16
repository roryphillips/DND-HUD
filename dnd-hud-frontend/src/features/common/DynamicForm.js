import * as React from 'react';
import {Component} from 'react';

import {Form, Input, InputNumber, Select} from 'antd';
const FormItem = {Form};
const Option = Select.Option;

export default class DynamicForm extends Component {
    formItemLayout = {
        labelCol: {
            xs: {span: 24},
            sm: {span: 8},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 16}
        }
    };

    constructor(props) {
        super(props);
        this.renderFormItem = this.renderFormItem.bind(this);
    }

    renderFormItem(control, key) {
        const decoratedControl = this.props.getFieldDecorator(control.key, {
            rules: control.rules
        })(this.renderControl(control));

        return (
            <Form.Item key={key} label={control.label}>
                {decoratedControl}
            </Form.Item>
        );
    }

    renderControl(control) {
        switch (control.type) {
            case 'input':
                return <Input/>;
            case 'number':
                return <InputNumber min={control.min} max={control.max} initialValue={control.min}/>;
            case 'select':
                return (
                    <Select>
                        {control.options.map((item, key) => {
                            return <Option key={key} value={item}>{item}</Option>
                        })}
                    </Select>
                );
        }
    }

    render() {
        const {template} = this.props;
        return (
            <Form layout={template.layout}>
                {template.controls.map((item, key) => this.renderFormItem(item, key))}
            </Form>
        );
    }
}
