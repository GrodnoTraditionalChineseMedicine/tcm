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
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

class LearnTcm extends Component {
    componentDidMount() {
        const {getAllMenus, getAllArticles, menus} = this.props;
        getAllMenus();
        getAllArticles();
    }
    renderMenu = (data) => {
        return data.map((item)=>{
            if(item.get("submenu").size !== 0){
                return <SubMenu key={item.get("menuCode")} title={item.get("menuName")}>
                    { this.renderMenu(item.get("submenu")) }
                </SubMenu>
            }
            return <Menu.Item key={item.get("menuCode")} title={item.get("menuName")}>{item.get("menuName")}</Menu.Item>
        })
    };

    render() {
        const { menus, articles, handleClick } = this.props;
        let isEmpty;
        isEmpty = menus.size === 0;
        return (
            <LearnTcmWrapper>
                <LearnTcmImg/>
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
                                    title={<a href="https://ant.design">{item.get("articleTitle")}</a>}
                                    description={item.get("articleRow")}
                                />
                                <div>{item.get("publishTime")}</div>
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
        articles: state.get("learntcm").get("articles")
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
            dispatch(actionCreators.getMenuArticles(e.key))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnTcm);