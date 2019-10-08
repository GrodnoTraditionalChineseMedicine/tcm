import styled from 'styled-components';
import last_logo from "../../statics/logo/logo.png";
import pure_logo from "../../statics/logo/pure_logo.png";

export const HeaderWrapper = styled.header`
    z-index: 1000;
    min-width: 1060px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    box-sizing: border-box;
    display: block;
    padding-bottom: 2px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    .ant-back-top{
      right: 60px;
    }
`;

export const NavMenu = styled.div`
  width: 1180px;
  height: 64px;
  padding: 0 20px;
  margin: 0 auto;
  font-weight: 600;
  transition: transform .3s cubic-bezier(.645,.045,.355,1);
  ${function (props) {
        if (props.isHide === true){
            return "transform: translateY(100%);"
        } else {
            return null;
        }
    }
  }
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
    font-weight: 500;
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    .ant-menu{
      font-size: 16px;
    }
    ${function (props) {
            if (props.isHide === false){
                return "transform: translateY(100%);"
            } else {
                return null;
            }
        }
    }
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
    width: calc(100% / 10);
    float: left;
    margin-right: 30px;
    background: url(${pure_logo}) no-repeat 0;
    background-size: auto 80%;
`;