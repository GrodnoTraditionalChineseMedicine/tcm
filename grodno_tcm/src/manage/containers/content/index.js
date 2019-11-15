import React from "react";
import {Divider, Form, Input, Popconfirm, Table} from "antd";
import {connect} from "react-redux";
import {actionCreators} from "./store";


const oldData = [{
    menuCode: "002",
    menuName: "诊断方法",
    level: "2",
    isShow: 1,
    isModify: 0,
    submenu: [{
        menuCode: "002001",
        menuName: "望诊",
        level: "2-1",
        isShow: 1,
        isModify: 0
    },{
        menuCode: "002002",
        menuName: "闻诊",
        level: "2-2",
        isShow: 1,
        isModify: 0
    },{
        menuCode: "002003",
        menuName: "问诊",
        level: "2-3",
        isShow: 1,
        isModify: 0
    },{
        menuCode: "002004",
        menuName: "切诊",
        level: "2-4",
        isShow: 0,
        isModify: 0
    }]
},{
    menuCode: "003",
    menuName: "治疗方法",
    level: "3",
    isShow: 0,
    isModify: 0,
    submenu: [{
        menuCode: "003001",
        menuName: "针刺",
        level: "3-1",
        isShow: 1,
        isModify: 0
    },{
        menuCode: "003002",
        menuName: "艾灸",
        level: "3-2",
        isShow: 1,
        isModify: 0
    },{
        menuCode: "003003",
        menuName: "砭石",
        level: "3-3",
        isShow: 1,
        isModify: 0
    },{
        menuCode: "003004",
        menuName: "汤药",
        level: "3-4",
        isShow: 1,
        isModify: 0
    }]
}];

const data = JSON.parse(JSON.stringify(oldData).replace(/menuCode/g,"key"));

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

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
                    data.length >= 1 ? (
                        record.isShow === 1 ? <span>显示</span> : <span>隐藏</span>
                    ) : null,
            },{
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>
                    data.length >= 1 ? (
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
                        <a>删除</a>
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
        console.log(key,isShow)
    };

    componentDidMount() {
        const { getAllRoles } = this.props;
        getAllRoles();
    }

    render(){
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

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllRoles(){
            dispatch(actionCreators.getContent())
        },
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