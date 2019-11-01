import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {actionCreators, actionTypes} from "./store";
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
        let { loginData }  = this.props;

        const { from } = this.props.location.state || { from: { pathname: "/manage" } };
        if (typeof loginData === 'object' && loginData.get("code") === 200) {
            sessionStorage.setItem('isAuthenticated', true);
        } else {
            sessionStorage.setItem('isAuthenticated', false);
        }
        let isAuthenticated  = sessionStorage.getItem('isAuthenticated');
        // 判断是否登录，
        if (isAuthenticated === "true") {
            from.pathname = from.pathname === '/manage/login' ? '/manage' :  from.pathname;
            return <Redirect to={from} />;
        } else {
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
        }
    }
}



const mapStateToProps = (state) => {
    return {
        loginData: state.get("login").get("loginData"),
        auth: state.auth
    }
};

/*
Login.propTypes = {
    auth: React.PropTypes.object.isRequired
};
*/

const mapDispatchToProps = (dispatch) => {
    return {
        login(values){
            dispatch(actionCreators.fetchPosts('/api/manage/login', actionTypes.LOGIN_ACTION, 'loginData', values));
        },
        axiosTest(values){
            dispatch(actionCreators.login(values));
        }
    }
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);