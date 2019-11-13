import Login from "../manage/login";
import Index from "../manage/index";
import ManageHome from "../manage/managehome";
import React from 'react';
import { RenderRoutes } from '../router/utils';

import Dashboard from "../manage/containers/dashboard";
import CarouselManage from "../manage/containers/carousel";
import StaffManage from "../manage/containers/staff";
import ContentManage from "../manage/containers/content";
import LearnTCM from "../manage/containers/learn";
import ArticleManage from "../manage/containers/article";
import PediatricMassageManagement from "../manage/containers/pediatric";
import RoleManagement from "../manage/containers/role";

const Ui = ({routes}) => (<div>
    <h3>Ui
    </h3>
    <RenderRoutes routes={routes}/>
</div>);
const Button = () => <h3>Button</h3>;
const Icon = () => <h3>Icon</h3>;
const Animation = () => <h3>Animation</h3>;
const From = () => <h3>From</h3>;

export const menus = [    // 菜单相关路由
    { path: '/manage/index/carousel', name: '轮播图管理', icon: 'file-image', component: CarouselManage },
    { path: '/manage/index/staff', name: '职工管理', icon: 'idcard', component: StaffManage },
    { path: '/manage/index/learn', name: '了解中医', icon: 'read', component: LearnTCM, routes: [
            {path: '/manage/index/learn/menu', name: '菜单管理', icon: 'menu', component: ContentManage },
            {path: '/manage/index/learn/articles', name: '文章管理', icon: 'book', component: ArticleManage }
        ]
    },{
      path: '/manage/index/pediatric', name: '小儿推拿管理', icon: 'smile', component: PediatricMassageManagement
    },{
        path: '/manage/index/role', name: '角色管理', icon: 'team', component: RoleManagement
    },{ path: '/manage/index/UI', name: 'UI', icon:'video-camera', component: Ui , routes: [
            {path: '/manage/index/UI/button', name: '按钮', icon: 'video-camera', component: Button },
            {path: '/manage/index/UI/Icon', name: '图标', icon: 'video-camera', component: Icon }
        ]
    }
];

export const main = [
    { path: '/manage/login', exact: true, name: '登录', component: Login, meta: {
            isAuth: true
        }},
    { path: '/manage/manageHome', exact: true, name: "测试页", component: ManageHome},
    { path: '/manage', exact: true,  name: '首页', Redirect: '/manage/index'},
    { path: '/manage/index', name: '首页', component: Index, routes: menus}
];



export const routerConfig =  {
    main, menus
};