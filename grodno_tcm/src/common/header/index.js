import React, {Component} from "react";
import {connect} from "react-redux";
import {Menu,BackTop} from "antd";
import {Link} from "react-router-dom";
import {HeaderWrapper, NavLogo, NavMenu,NavArea,PureLogo} from './style';
import {actionCreators} from "./store";

let lastScrollY = 0;

class Header extends Component {
    render() {
        const {isHide, selectedKey, handleChangeKey} = this.props;
        return (
            <HeaderWrapper>
                <BackTop />
                <NavMenu isHide={isHide}>
                    <NavLogo/>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={[selectedKey+""]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item onClick={handleChangeKey} key="1"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item onClick={handleChangeKey} key="2"><Link to="/hospital_intro">医院简介</Link></Menu.Item>
                        <Menu.Item onClick={handleChangeKey} key="3"><Link to="/center_intro">中心简介</Link></Menu.Item>
                        <Menu.Item onClick={handleChangeKey} key="4"><Link to="/learn_ctm">了解中医</Link></Menu.Item>
                        <Menu.Item onClick={handleChangeKey} key="5"><Link to="/massage">小儿推拿</Link></Menu.Item>
                    </Menu>
                </NavMenu>
                <NavArea isHide={isHide}>
                    <PureLogo/>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={[selectedKey+""]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item onClick={handleChangeKey} key="1"> <Link to="/">首页</Link></Menu.Item>
                        <Menu.Item onClick={handleChangeKey} key="2"><Link to="/hospital_intro">医院简介</Link></Menu.Item>
                        <Menu.Item onClick={handleChangeKey} key="3"><Link to="/center_intro">中心简介</Link></Menu.Item>
                        <Menu.Item onClick={handleChangeKey} key="4"><Link to="/learn_ctm">了解中医</Link></Menu.Item>
                        <Menu.Item onClick={handleChangeKey} key="5"><Link to="/massage">小儿推拿</Link></Menu.Item>
                    </Menu>
                </NavArea>
            </HeaderWrapper>
        );
    }

/*    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }*/

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
        selectedKey: state.get("header").get("selectedKey")
        // isLogged: state.get("login").get("isLogged"),
        // currentUser: state.get("login").get("currentUser")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleScroll(event) {
            lastScrollY = window.scrollY;
            if (lastScrollY < 66) {
                dispatch(actionCreators.showTheNav())
            } else if (lastScrollY > 66){
                dispatch(actionCreators.hideTheNav())
            }
        },
        handleChangeKey(event){
            let sKey = event.key;
            dispatch(actionCreators.changeTheSelectedKey(sKey))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);