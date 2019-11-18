import React from "react";
import {Button, Divider, Form, Input, Modal, Popconfirm, Table, Icon, Upload, Cascader} from "antd";
import {connect} from "react-redux";
import {actionCreators} from "./store";

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const fileList = [
    {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
];
const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
};

let options = [];

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        onChange = value=> {
          console.log(value)
        };
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            let op = JSON.parse(JSON.stringify(options).replace(/menuCode/g,"value"));
            op = JSON.parse(JSON.stringify(op).replace(/menuName/g,"label"));
            op = JSON.parse(JSON.stringify(op).replace(/submenu/g,"children"));
            return (
                <Modal
                    visible={visible}
                    title="新增角色"
                    okText="保存"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="目录名称">
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入目录名称!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="选择它所属目录">
                            {getFieldDecorator('residence', {
                                rules: [
                                    { type: 'array', required: true, message: '请务必选择一个目录' },
                                ],
                            })(<Cascader options={op} onChange={this.onChange} changeOnSelect/>)}
                        </Form.Item>
                        <Form.Item label="上传目录图" extra="请上传 .jpg 或 .png格式的照片">
                            <Upload {...props}>
                                {
                                    fileList.length >= 2 ? null :
                                        <Button>
                                            <Icon type="upload" /> Upload
                                        </Button>
                                }
                            </Upload>
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);


class EditableCell extends React.Component {
    state = {
        editing: false,
    };

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    save = e => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    };

    renderCell = form => {
        this.form = form;
        const { children, dataIndex, record, title } = this.props;
        const { editing } = this.state;
        return editing ? (
            <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        {
                            required: true,
                            message: `${title} 必须填写。`,
                        },
                    ],
                    initialValue: record[dataIndex],
                })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{ paddingRight: 24 }}
                onClick={this.toggleEdit}
            >
                {children}
            </div>
        );
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                    children
                )}
            </td>
        );
    }
}


class ContentManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.columns = [
            {
                title: '目录名称',
                dataIndex: 'menuName',
                editable: true,
            },
            {
                title: '目录等级',
                dataIndex: 'level',
                width: '12%',
                editable: true,
            },
            {
                title: '是否展示',
                dataIndex: 'isShow',
                width: '30%',
                render: (text, record) =>
                    this.props.content.length >= 1 ? (
                        record.isShow === 1 ? <span>显示</span> : <span>隐藏</span>
                    ) : null,
            },{
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.props.content.length >= 1 ? (
                        <span>
                    <Popconfirm title="确认隐藏吗?隐藏后该目录所有文章将隐藏！" onConfirm={() => this.handleChangeShow(record.key, record.isShow === 1)}>
                        <a disabled={record.isShow !== 1}>隐藏</a>
                    </Popconfirm>
                    <Divider type="vertical" />
                    <Popconfirm title="确认显示吗?显示后该目录所有文章将展示！" onConfirm={() => this.handleChangeShow(record.key, record.isShow === 1)}>
                        <a disabled={record.isShow === 1}>显示</a>
                    </Popconfirm>
                    <Divider type="vertical" />
                    <Popconfirm title="确认显示吗?显示后该目录所有文章将展示！" onConfirm={() => this.handleDelete(record.key)}>
                        <a disabled={record.isModify === 0}>删除</a>
                    </Popconfirm>
                </span>
                    ) : null,
            }
        ];
    }
    handleSave = row => {
        const {updateRole} = this.props;
        updateRole(row);
    };

    handleDelete = key => {
        /*const {deleteRole} = this.props;
        deleteRole(id);*/
        console.log(key);
    };

    handleChangeShow = (key, isShow) => {
        const {changeShowState} = this.props;
        changeShowState(key, !isShow);
    };

    //新增
    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        const { addRole } = this.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            const role = {
                roleName: values.name
            };
            addRole(role);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    componentDidMount() {
        const { getAllRoles } = this.props;
        getAllRoles();
    }

    render(){
        const { content } = this.props;
        options = content;
        const data = JSON.parse(JSON.stringify(content).replace(/menuCode/g,"key"));
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Button onClick={this.showModal} type="primary" style={{ marginBottom: 16 }}>
                    新增目录
                </Button>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                <Table
                    bordered
                    columns={columns}
                    components={components}
                    childrenColumnName="submenu"
                    dataSource={data}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.get("containers").get("content").get("content")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllRoles(){
            dispatch(actionCreators.getContent())
        },
        changeShowState(key, isShow){
            dispatch(actionCreators.changeIsShow(key, isShow));
        }
        /*updateRole(role){
            dispatch(actionCreators.updateRole(role))
        },
        deleteRole(id){
            dispatch(actionCreators.deleteRole(id))
        },
        addRole(role){
            dispatch(actionCreators.addRole(role))
        }*/
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentManage);