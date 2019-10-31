import React, { Component } from 'react';
import { connect  } from 'react-redux'
import {actionCreators} from "../../store";
import {filterData} from "../../utils";
import {Layout, Icon, Menu, Dropdown, Avatar} from 'antd';
import {login} from "../../login/store/actionCreators";
const { Header } = Layout;
const { SubMenu, ItemGroup } = Menu;

class MyHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            onSlidecollapsed: this.props.onSlidecollapsed
        };
    }
    toggle = () => {
        this.state.onSlidecollapsed()
    };
    logout = (e) => { // +
        /*this.props.onLogout({});*/  // 退出登录， 如果是正常项目中， 应该会传递一些数据过去，这里没有用户数据， 因此传递个空对象
        sessionStorage.removeItem('isAuthenticated');  // 发出退出请求后， 直接退出， 无需等待后台返回响应。
        this.setState({
            isAuthenticated: "false" // 判断是否登录
        });
    };


    render() {
        let { slidecollapsed, loginData } = this.props;
        slidecollapsed = filterData(slidecollapsed, 'slidecollapsed');
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        个人信息
                    </a>
                </Menu.Item>
                <Menu.Item key="1">
                    <span onClick={this.logout}>
                        退出
                    </span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>
                </Menu.Item>
            </Menu>
        );

        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={ slidecollapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <Dropdown overlay={menu}>
                    <Avatar size="large" src={loginData === "暂无数据" ? "" : loginData.get("currentUser").get("imgUrl")}/>
                </Dropdown>
            </Header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        slidecollapsed: state.get("manage").get("slidecollapsed"),
        loginData: state.get("login").get("loginData")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSlidecollapsed(){
            dispatch(actionCreators.changeSlideAction())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);