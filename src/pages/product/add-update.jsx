import React, { Component } from 'react';
import { Card, Icon, Form, Input, Select, Button } from "antd";
import LinkButton from '../../components/link-button';

import PicturesWall from './pictures-wall '
// import memoryUtils from '../../utils/memoryUtils';

// import {reqCategorys} from '../../api'
// const Item = List.Item;

/* 
商品添加/更新路由组件
*/

class ProductAddUpdate extends Component {

    // static = {
    //     categorys=[]
    // };

    // getCategorys = async () => {
    //     const result = await reqCategorys();
    //     if (result.status === 0) {
    //         const categorys= result.data;
    //         this.setState({ categorys })
    //     }
    // };


    /* 对价格进行自定义验证 */
    validatorPrize = (rule, value, callback) => {
        if (value === '') {
            callback()
        } else if (value * 1 <= 0) {
            callback('价格必须大于0')
        } else {
            callback()
        }

    }

    /* 处理提交的回调 */
    handleSubmit = (event) => {
        //阻止事件的默认行为(提交表单)
        event.preventDefault()

        //进行统一的表单验证
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const { name, desc, prize, categoryId } = values
                console.log('发送请求', name, desc, prize, categoryId)
            }
        })
    };

    // componentWillMount() {
    //     const product = memoryUtils.product
    //     this.isUpdate = !!this.product._id
    //     if (product._id) {
    //         this.isUpdate = true
    //     } else {
    //         this.isUpdate = false
    //     }
    // }

    // componentDidMount() {
    //     this.getCategorys()

    // };



    render() {
        const { Option } = Select;
        const { isUpdate } = this;
        // const { categorys } = this.state
        const { getFieldDecorator } = this.props.form;

        const title = (
            <span>
                <LinkButton onClick={() => this.props.history.goBack('/product/home')}>
                    <Icon type="arrow-left"></Icon>
                </LinkButton>
                <span>{isUpdate ? '修改商品' : '添加商品'}</span>
            </span>
        );

        //指定form中所有item的布局
        const formLayout = {
            labelCol: { span: 1 },
            wrapperCol: { span: 8 }
        };
        return (
            <Card title={title}>
                <Form {...formLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="商品名称">
                        {getFieldDecorator('name', {
                            // initialValue: product.name,
                            initialValue: '',
                            rules: [
                                { required: true, message: '必须输入商品名称!' }
                            ],
                        })(<Input placeholder="商品名称" />)}
                    </Form.Item>
                    <Form.Item label="商品描述">
                        {getFieldDecorator('desc', {
                            initialValue: '',
                            // initialValue: product.desc,
                            rules: [
                                { required: true, message: '必须输入商品描述!' }
                            ],
                        })(<Input placeholder="商品描述" />)}
                    </Form.Item>
                    <Form.Item label="商品价格">
                        {getFieldDecorator('prize', {
                            initialValue: '',
                            // initialValue: product.prize,
                            rules: [
                                { required: true, message: '必须输入商品价格!' },
                                { validator: this.validatorPrize }
                            ],
                        })(<Input type="number" placeholder="商品价格" addonAfter="元" />)}
                    </Form.Item>
                    <Form.Item label="商品分类">
                        {getFieldDecorator('category', {
                            // initialValue: product.category||'',
                            initialValue: '',
                            rules: [
                                { required: true, message: '必须输入商品分类!' }
                            ],
                        })(
                            <Select>
                                <Option value=''>未选择</Option>
                                <Option value='aa'>aa</Option>
                                <Option value='bb'>bb</Option>
                                <Option value='cc'>cc</Option>
                                <Option value='dd'>dd</Option>
                                {/* {
                                    categorys.map(c => <Option value={c._id} key={c._id}>{c.name}</Option>)
                                } */}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="&nbsp;&nbsp;&nbsp;商品图片">
                        <PicturesWall></PicturesWall>
                    </Form.Item>
                    <Form.Item label="&nbsp;&nbsp;&nbsp;商品详情">
                        <div>商品详情组件</div>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
            </Card >
        )
    }
}
export default Form.create()(ProductAddUpdate)