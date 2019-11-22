import React, {Component} from "react";
import ContactImage from "../../statics/picture/contact.png";
import {
    ContactUsWrapper,
    ContactUsInfo,
    ContactUsImg,
    ContactMainArea,
    SendMessageArea
} from "./style";
import {Form, Icon, Input, Button} from "antd";

class ContactUs extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Start Send Email!")
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <ContactUsWrapper>
                <ContactUsInfo>
                    <ContactUsImg/>
                    <ContactMainArea>
                        <ul>
                            <li className="message">
                                <SendMessageArea>
                                    <h1>给我们留言</h1>
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <Form.Item>
                                            {getFieldDecorator('fullName', {
                                                rules: [{required: true, message: 'Please enter your name!'}],
                                            })(
                                            <Input
                                                placeholder="Full Name"
                                            />)}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('email', {
                                                rules: [{required: true, message: 'Please enter your email!'}],
                                            })(
                                                <Input
                                                    placeholder="Email Address"
                                                />)}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('message', {
                                                rules: [{required: true, message: 'Please enter your message!'}],
                                            })(
                                                <Input
                                                    placeholder="Message"
                                                />)}
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                SUBMIT
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </SendMessageArea>
                            </li>
                            <li className="img">
                                <img alt={ContactImage} src={ContactImage}/>
                            </li>
                        </ul>
                    </ContactMainArea>
                </ContactUsInfo>
            </ContactUsWrapper>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'contact-us' })(ContactUs);
export default WrappedNormalLoginForm;