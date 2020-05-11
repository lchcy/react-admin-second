import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import logo from "../../assets/images/logo.png";
import './login.less';


const { Item } = Form;

    

class Login extends Component {
  
    handleSubmit = e => {

        //阻止时间的默认行为，阻止表单的提交
        e.preventDefault();

        //取出输入的相关的数据
        // const from = this.props.form
        // const values = from.getFieldsValue()//取所有值+s
        // const username = from.getFieldValue('username')//去一个值
        // const password = from.getFieldValue('password')

        // console.log(values, username, password)

        // 对表单所有字段进行统一验证
        this.props.form.validateFields((err, {username,password}) => {
            if (!err) {
                this.props.history.replace('/')
            }
        });
        // alert('发送的ajax请求');
    };


    //对密码进行自定义验证
    validatePwd = (rule, value, callback) => {
        // 1、必须输入
        // 2、必须大于等于4位
        // 3、必须小于等于12位
        // 4、必须是英文。数字或下划线组成
        value = value.trim()
        if (!value) {
            callback('密码必须输入')
        } else if (value.length < 4) {
            callback('密码不能小于4位')
        } else if (value.length > 12) {
            callback('密码不能大于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文。数字或下划线组成')
        } else {
            callback()//验证通过
        }
    };

    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React项目：后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {getFieldDecorator('username', {//配置对象：属性名是一些特定的名称
                                initialValue:'',//初始值
                                rules: [
                                    //声明式验证
                                    /*
                                    用户名/密码的合法性要求
                                        1、必须输入
                                        2、必须大于等于4位
                                        3、必须小于等于12位
                                        4、必须是英文。数字或下划线组成
                                    */

                                    { required: true, whitespace: true, message: '用户名是必须输入' },
                                    { min: 4, message: '用户名不能小于4位' },
                                    { max: 12, message: '用户名不能大于12位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文。数字或下划线组成' }
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />
                            )}
                        </Item>
                        <Item>
                            {getFieldDecorator('password', {
                                initialValue:'',//初始值
                                rules: [
                                    { validator: this.validatePwd }
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />
                            )}

                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" > 登录</Button>
                        </Item>
                    </Form>
                </div>
            </div>
        );
    };

};
/*  


理解From组件：包含<From>的组件
利用Form.create()包装From组件生成一个新的组件
新组件会向from组件传递一个强大的属性：属性名：from，属性值对象
Form.create()返回的是一个高阶组件
*/

const WrappedNormalLoginForm = Form.create()(Login);


export default WrappedNormalLoginForm; //<From(Login)/>

