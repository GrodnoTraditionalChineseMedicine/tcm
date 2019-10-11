import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {actionCreators} from "./store";
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import {
    LoginWrapper,
    FormLogo,
    FormBack,
    FormCopyright,
    LoginArea,
    FormWrapper
} from "./style";


class Login extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const {isLogged, isRegister} = this.props;
        if (!isLogged) {
            return (
                <LoginWrapper>
                    <LoginArea>
                        <FormLogo/>
                        <FormBack><Link to="/">首页</Link></FormBack>
                        <FormCopyright>©Copyright 甘肃省中医院</FormCopyright>
                        <FormWrapper>
                            <h2>登录</h2>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{required: true, message: '请输入用户名!'}],
                                    })(
                                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                               placeholder="用户名"/>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{required: true, message: '请输入密码!'}],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                               type="password" placeholder="密码"/>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: false,
                                    })(
                                        <Checkbox>记住我</Checkbox>
                                    )}
                                    <a className="login-form-forgot" href="/">忘记密码</a><br/>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                        </FormWrapper>
                    </LoginArea>

                </LoginWrapper>
            );
        } else {
            return <Redirect to="/"/>
        }
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const mapStateToProps = (state) => {
    return {
        isLogged: state.get("login").get("isLogged")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login(values){
            dispatch(actionCreators.login(values));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);