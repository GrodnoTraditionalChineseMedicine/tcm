import React, {Component} from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { Form, Input, Button } from 'antd'
import {
    RichEditorWrapper,
    RichEditorInfo
} from './style';
import FormItem from "antd/es/form/FormItem";

class RichEditor extends Component {

    componentDidMount () {

        // 异步设置编辑器内容
        setTimeout(() => {
            this.props.form.setFieldsValue({
                content: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
            })
        }, 1000)

    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (!error) {
                const submitData = {
                    title: values.title,
                    content: values.content.toRAW() // or values.content.toHTML()
                };
                console.log(submitData)
            }
        })
    };

    preview = () => {

        if (window.previewWindow) {
            window.previewWindow.close()
        }

        window.previewWindow = window.open();
        window.previewWindow.document.write(this.buildPreviewHtml());
        window.previewWindow.document.close()

    };

    buildPreviewHtml () {
        return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${this.state.editorState.toHTML()}</div>
        </body>
      </html>
    `
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const excludeControls = [
            'letter-spacing',
            'line-height',
            'clear',
            'headings',
            'list-ol',
            'list-ul',
            'remove-styles',
            'superscript',
            'subscript',
            'hr',
            'text-align'
        ];

        const extendControls = [
            {
                key: 'custom-button',
                type: 'button',
                text: '预览',
                onClick: this.preview
            }
        ];
        return (
            <RichEditorWrapper>
                <RichEditorInfo>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem label="文章标题">
                        {getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: '请输入标题',
                            }],
                        })(
                            <Input size="large" placeholder="请输入标题"/>
                        )}
                    </FormItem>
                    <FormItem label="文章正文">
                        {getFieldDecorator('content', {
                            validateTrigger: 'onBlur',
                            rules: [{
                                required: true,
                                validator: (_, value, callback) => {
                                    if (value.isEmpty()) {
                                        callback('请输入正文内容')
                                    } else {
                                        callback()
                                    }
                                }
                            }],
                        })(
                            <BraftEditor
                                className="my-editor"
                                contentStyle={{height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}
                                onChange={this.handleChange}
                                excludeControls={excludeControls}
                                extendControls={extendControls}
                                placeholder="请输入正文内容"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button size="large" type="primary" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
                </RichEditorInfo>
            </RichEditorWrapper>
        );
    }
}

export default Form.create()(RichEditor);