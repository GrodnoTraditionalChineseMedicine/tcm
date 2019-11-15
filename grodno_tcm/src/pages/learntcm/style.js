import styled from 'styled-components';
import LearnTcm from "../../statics/picture/learntcm.jpg";

export const LearnTcmWrapper = styled.div`
    width: 100%;
    position: relative;
    min-width: 1020px;
    display: block;
    overflow: hidden;
`;

export const LearnTcmImg = styled.div`
    width: 100%;
    height: 450px;
    background: url(${LearnTcm}) no-repeat center/100%;
`;

export const LearnTcmContent = styled.div`
    width: 980px;
    min-width: 980px;
    padding: 20px;
    margin: 0 auto;
    margin-top: -100px;
    position: relative;
    display: block;
    overflow: hidden;
    background: #f0f0f0;
    border-radius: 20px 20px 0 0;
    .ant-menu-submenu-title{
      font-weight: 600;
    }
`;

export const SiderMenu = styled.div`
  position: relative;
  display: table-cell;
  width: 20%;
  .ant-menu-inline{
      border-radius: 10px;
      border: none;
  }
`;

export const ContentList = styled.div`
      position: relative;
      display: table-cell;
      padding: 10px;
      background: #fff;
      border-radius: 10px;
/*      box-shadow: 2px 2px 8px #888888;*/
      width: 70%;
`;


/*export const HospitalIntroImg = styled.div`
    width: 100%;
    height: 500px;
    background: url(${Hospital}) no-repeat center/100%;
`;*/
