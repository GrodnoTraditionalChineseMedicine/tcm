import styled from 'styled-components';
import last_logo from "../../statics/logo/logo.png";
import pure_logo from "../../statics/logo/pure_logo.png";
import header_img from "../../statics/header/header-img.jpg";

export const HeaderWrapper = styled.div`
    z-index: 1000;
    min-width: 1180px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    display: block;
    padding-bottom: 2px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
`;

export const NavMenu = styled.div`
  width: 1180px;
  height: 64px;
  padding: 0 20px;
  margin: 0 auto;
  font-weight: 600;
  transition: transform .3s cubic-bezier(.645,.045,.355,1);
  transform: translateY(100%);
  /*${function (props) {
    if (props.isHide === true){
        return "z-index: 1000;position: fixed;top:0;"
    } else {
        return null;
    }
}
}*/
  /*z-index: ${props => props.isHide === true ? "1000" : "0"};
  position: ${props => props.isHide === true ? "fixed" : "relative"};*/
`;

export const NavArea = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 1180px;
    height: 64px;
    padding: 0 20px;
    font-weight: 600;
/*    transform: translateY(100%);*/
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
`;

export const NavLogo = styled.a.attrs({
   href: '/'
})`
    height: 64px;
    width: calc(100% / 5.5);
    float: left;
    margin-right: 30px;
    background: url(${last_logo}) no-repeat center/100%;
`;

export const PureLogo = styled.a.attrs({
    href: "/"
})`
    height: 62px;
    width: calc(100% / 6);
    float: left;
    margin-top: 2px;
    margin-right: 30px;
    background: url(${pure_logo}) no-repeat;
    background-size: auto 100%;
`;