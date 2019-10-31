import React, {Component} from "react";
import {connect} from "react-redux";
import {Menu, BackTop} from "antd";
import {Link, withRouter} from "react-router-dom";
import {
    HeaderWrapper, NavLogo, NavMenu,HeaderMenu,HeaderNav,MenuItem
} from './style';
import {actionCreators} from "./store";

let lastScrollY = 0;
let thisScrollY = 0;

class Header extends Component {
    render() {
        const {isHide, isTop, selectedKey, handleChangeKey} = this.props;
        const path = this.props.location.pathname;
        return (
            <HeaderWrapper>
                <BackTop />
                <NavMenu isHide={isHide} isTop={isTop}>
                    <NavLogo/>
                    <HeaderMenu>
                        <HeaderNav>
                            <Menu
                                mode="horizontal"
                                defaultSelectedKeys={[path]}
                                style={{ lineHeight: '66px'}}
                            >
                                <Menu.Item onClick={handleChangeKey} key="/"><Link to="/">首页</Link></Menu.Item>
                                <Menu.Item onClick={handleChangeKey} key="/hospital_intro"><Link to="/hospital_intro">医院简介</Link></Menu.Item>
                                <Menu.Item onClick={handleChangeKey} key="/center_intro"><Link to="/center_intro">中心简介</Link></Menu.Item>
                                <Menu.Item onClick={handleChangeKey} key="/learn_tcm"><Link to="/learn_tcm">了解中医</Link></Menu.Item>
                                <Menu.Item onClick={handleChangeKey} key="/pediatric"><Link to="/pediatric">小儿推拿</Link></Menu.Item>
                                <Menu.Item onClick={handleChangeKey} key="/rich_editor"><Link to="/rich_editor">富文本测试</Link></Menu.Item>
                            </Menu>
                        </HeaderNav>
                    </HeaderMenu>
                </NavMenu>
            </HeaderWrapper>
        );
    }

    componentDidMount() {
        const {handleScroll} = this.props;
        window.addEventListener('scroll', handleScroll);
    };

    componentWillUnmount() {
        const {handleScroll} = this.props;
        window.removeEventListener('scroll', handleScroll);
    };
}

const mapStateToProps = (state) => {
    return {
        isHide: state.get("header").get("isHide"),
        isTop: state.get("header").get("isTop"),
        selectedKey: state.get("header").get("selectedKey")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleScroll(event) {
            thisScrollY = window.scrollY;
            if (thisScrollY === 0) {
                dispatch(actionCreators.changeTop(true));
            } else {
                if (lastScrollY - thisScrollY > 0) {
                    dispatch(actionCreators.showTheNav())
                } else if(lastScrollY - thisScrollY < 0) {
                    dispatch(actionCreators.hideTheNav())
                }
                dispatch(actionCreators.changeTop(false));
            }
            lastScrollY = thisScrollY;
        },
        handleChangeKey(event){
            let sKey = event.key;
            dispatch(actionCreators.changeTheSelectedKey(sKey))
        }
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));