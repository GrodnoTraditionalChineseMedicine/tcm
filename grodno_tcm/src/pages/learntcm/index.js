import React, {Component} from 'react';
import { Menu, List, Avatar} from 'antd';
import {
    LearnTcmWrapper,
    LearnTcmImg,
    LearnTcmContent,
    SiderMenu,
    ContentList
} from './style';
import {actionCreators} from "./store";
import {connect} from "react-redux";

const { SubMenu } = Menu;

class LearnTcm extends Component {
    componentDidMount() {
        const {getAllMenus, getAllArticles} = this.props;
        getAllMenus();
        getAllArticles();
    }
    renderMenu = (data) => {
        const {clickSubmenu} = this.props;
        return data.map((item)=>{
            if(item.hasOwnProperty("submenu")){
                return <SubMenu key={item.menuCode} title={item.menuName} onTitleClick={clickSubmenu.bind(this)}>
                    { this.renderMenu(item.submenu) }
                </SubMenu>
            }
            return <Menu.Item key={item.menuCode} title={item.menuName}>{item.menuName}</Menu.Item>
        })
    };

    render() {
        const { menus, articles, handleClick, currentMenu } = this.props;
        let isEmpty;
        isEmpty = menus.size === 0;
        return (
            <LearnTcmWrapper>
                <LearnTcmImg imgUrl={currentMenu === null ? null : currentMenu.imgUrl}/>
                <LearnTcmContent>
                    <SiderMenu>
                    {
                        !isEmpty ?
                            <Menu
                                onClick={handleClick.bind(this)}
                                style={{ width: 200 }}
                                mode="inline">
                                {this.renderMenu(menus)}
                            </Menu>
                            : ""
                    }
                    </SiderMenu>
                    <ContentList>
                    <List
                        itemLayout="horizontal"
                        dataSource={articles}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.articleTitle}</a>}
                                    description={item.articleRow}
                                />
                                <div>{item.publishTime}</div>
                            </List.Item>
                        )}
                    />
                    </ContentList>
                </LearnTcmContent>
            </LearnTcmWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.get("learntcm").get("menus"),
        articles: state.get("learntcm").get("articles"),
        currentMenu: state.get("learntcm").get("currentMenu")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMenus(){
            dispatch(actionCreators.getAllMenus())
        },
        getAllArticles(){
            dispatch(actionCreators.getAllArticles())
        },
        handleClick(e){
            dispatch(actionCreators.getMenuArticles(e.key));
            dispatch(actionCreators.getCurrentMenu(e.key))
        },
        clickSubmenu(e){
            dispatch(actionCreators.getCurrentMenu(e.key))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnTcm);