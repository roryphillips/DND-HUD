import * as React from 'react';
import {Component} from 'react';
import {Button, Form, Icon, Input, InputNumber} from "antd";

let id = 0;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: {span: 8}
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16}
    }
};

const formItemLayoutWithoutLabel = {
    wrapperCol: {
        xs: {span: 24, offset: 0},
        sm: {span: 20, offset: 4}
    }
};
export class SetInitiativeForm extends Component {
    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');

        if (keys.length === 1) {
            return;
        }

        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id);
        id++;

        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;

        getFieldDecorator('keys', {initialValue: []});
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <React.Fragment key={k}>

                    <Form.Item {...formItemLayout} label='Name' required={false}>
                        {getFieldDecorator(`names[${k}]`, {})(
                            <Input placeholder='CharacterName' style={{width: '100%'}}/>
                        )}
                    </Form.Item>
                    <Form.Item  {...formItemLayout} label='Initiative Score' required={false}>
                        {getFieldDecorator(`scores[${k}]`, {})(
                            <InputNumber style={{width: '100%'}}/>
                        )}
                    </Form.Item>
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </React.Fragment>
            )
        })
        return (
            <Form onSubmit={this.props.onSubmit} layout='horizontal'>
                {formItems}
                <Form.Item {...formItemLayoutWithoutLabel}>
                    <Button type='dashed' onClick={this.add} styly={{ width: '100%' }}>
                        <Icon type='plus' /> Add Character
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
