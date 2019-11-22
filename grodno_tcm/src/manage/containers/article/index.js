import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {actionCreators as contentAC} from "../content/store";
import {actionCreators} from "./store";
import {Menu, Table, Input, Button, Icon, Popconfirm, Divider} from "antd";
import Highlighter from 'react-highlight-words';
import {
    SiderMenu,
    ArticleWrapper,
    TableList,
    ArticleHelpInfo,
    ArticleTitle
} from "./style";

const { SubMenu } = Menu;

class ArticleManage extends Component {
    state = {
        searchText: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`搜索 ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    搜索
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    重置
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    componentDidMount() {
        const { getAllContent, getAllArticles } = this.props;
        getAllContent();
        getAllArticles();
    }

    handleChangeShow = (articleId, isShow) => {
        console.log(articleId, isShow);
    };

    renderMenu = (data) => {
        const {handleClick} = this.props;
        return data.map((item)=>{
            if(item.hasOwnProperty("submenu")){
                return <SubMenu key={item.menuCode} title={item.menuName} onTitleClick={handleClick}>
                    { this.renderMenu(item.submenu) }
                </SubMenu>
            }
            return <Menu.Item key={item.menuCode} title={item.menuName}>{item.menuName}</Menu.Item>
        })
    };

    render() {
        const { content, articles, handleClick } = this.props;
        let isEmpty;
        isEmpty = content.size === 0;
        const columns = [
            {
                title: '标题',
                dataIndex: 'articleTitle',
                width: '40%',
                ...this.getColumnSearchProps('articleTitle'),
                render: (text,record) =>
                    <span>
                        <Link to={`/article/detail/${record.articleId}`} target="_blank"><ArticleTitle>{text}</ArticleTitle></Link>
                    </span>
            },
            {
                title: '发布时间',
                dataIndex: 'publishedTime',
                width: '25%'
            },
            {
                title: '是否展示',
                dataIndex: 'isShow',
                width: '12%',
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
                    <Popconfirm title="确认隐藏吗?隐藏后该文章将在前台隐藏！" onConfirm={() => this.handleChangeShow(record.articleId, record.isShow === 1)}>
                        <a disabled={record.isShow !== 1}>隐藏</a>
                    </Popconfirm>
                    <Divider type="vertical" />
                    <Popconfirm title="确认显示吗?显示后该文章将在前台展示！" onConfirm={() => this.handleChangeShow(record.articleId, record.isShow === 1)}>
                        <a disabled={record.isShow === 1}>显示</a>
                    </Popconfirm>
                    <Divider type="vertical" />
                    <Popconfirm title="确认删除吗?删除会导致该文章不会显示！如无特殊情况可以选择隐藏或修改！" onConfirm={() => this.handleDelete(record.articleId)}>
                        <a>删除</a>
                    </Popconfirm>
                </span>
                    ) : null,
            }
        ];
        return (
            <ArticleWrapper>
                <ArticleHelpInfo>
                    <strong>提示：</strong>默认显示所有文章，点击左侧菜单，右侧文章列表发生改变。
                </ArticleHelpInfo>
                <SiderMenu>
                    <Button className="add-button" type="primary">新增文章</Button>
                    {
                        !isEmpty ?
                            <Menu
                                onClick={handleClick}
                                style={{ width: 200 }}
                                mode="inline">
                                {this.renderMenu(content)}
                            </Menu>
                            : ""
                    }
                </SiderMenu>
                <TableList>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={Array.from(articles)}
                        rowKey="articleId"
                    />
                </TableList>
            </ArticleWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.get("containers").get("content").get("content"),
        articles: state.get("containers").get("article").get("articles")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllContent(){
            dispatch(contentAC.getContent())
        },
        getAllArticles(){
            dispatch(actionCreators.getAllArticles())
        },
        handleClick(e){
            dispatch(actionCreators.getArticlesByCode(e.key));
            console.log(e.key)
        },
        changeShowState(key, isShow){
            dispatch(actionCreators.changeIsShow(key, isShow));
        }
        /*getAllRoles(){
            dispatch(actionCreators.getAllRoles())
        },
        updateRole(role){
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleManage);