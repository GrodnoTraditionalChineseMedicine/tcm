import Login from "../manage/login";
import Index from "../manage/index";
import ManageHome from "../manage/managehome";
import React from 'react';
import { RenderRoutes } from '../router/utils';

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
    { path: '/manage/index/UI', name: 'UI', icon:'video-camera', component: Ui , routes: [
            {path: '/manage/index/UI/button', name: '按钮', icon: 'video-camera', component: Button },
            {path: '/manage/index/UI/Icon', name: '图标', icon: 'video-camera', component: Icon }
        ]
    },
    { path: '/manage/index/animation', name: '动画', icon: 'video-camera', component: Animation },
    { path: '/manage/index/form', name: '表格', icon: 'video-camera', component: From }
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