import styled from 'styled-components';
import last_logo from "../../statics/logo/logo.png";

export const HeaderWrapper = styled.header`
    z-index: 1000;
    min-width: 1020px;
    width: 100%;
    top: -68px;
    position: fixed;
    display: block;
    transform: translate3d(0,0,0);
`;

export const NavMenu = styled.div`
    width: 100%;
    position: relative;
    height: 68px;
    padding: 0 35px;
    margin: 0 auto;
    font-weight: 600;
    transition: top .25s ease-in-out,background .25s ease-in-out;
    ${function (props) {
        if (props.isTop === true) {
            return "top: 68px;background-color: rgba(0,0,0,0);"
        } else {
            if (props.isHide === false) {
                return "top: 68px;background-color: rgba(255, 255, 255,1);"
            } else {
                return "top: 0;background-color: rgba(255, 255, 255,1);";
            }
        }
    }}
`;

export const HeaderMenu = styled.div`
    width: 100%;
    height: 68px;
    text-align: center;
    position: relative;
    top: 0;
    transition: top .25s ease-in-out;
`;

export const HeaderNav = styled.ul`
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;
    float: right;
    .ant-menu{
        background: none;
        position: relative;
        .ant-menu-horizontal .ant-menu-item-active{
          color:red;
        }
    }
    .ant-menu-item .ant-menu-item-selected, 
    .ant-menu-horizontal .ant-menu-item-active,
    .ant-menu-horizontal{
        border-bottom: none;
    }
`;

export const MenuItem = styled.li`
    line-height: 68px;
    position: relative;
    float: left;
    display: inline-block;
    &.active{
        color: #9abdb1;
    }
    a{
        font-size: 16px;
        font-weight: 600;
        color: rgba(241, 242, 246,1.0);
    }
    padding-left: 45px;
`;

export const NavLogo = styled.a.attrs({
   href: '/'
})`
    height: 68px;
    width: 180px;
    float: left;
    z-index: 999;
    position: relative;
    margin-right: 30px;
    background: url(${last_logo}) no-repeat center/100%;
`;