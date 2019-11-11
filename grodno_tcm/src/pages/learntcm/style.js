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
    padding: 10px 20px;
    margin: 5px auto;
    position: relative;
    display: block;
    overflow: hidden;
    background: #fff;
    .ant-menu-submenu-title{
      font-weight: 600;
    }
`;

export const SiderMenu = styled.div`
  position: relative;
  display: table-cell;
  width: 20%;
  .ant-menu-inline{
      border-left: 1px solid #e8e8e8;
  }
`;

export const ContentList = styled.div`
  position: relative;
  display: table-cell;
  width: 70%;
`;


/*export const HospitalIntroImg = styled.div`
    width: 100%;
    height: 500px;
    background: url(${Hospital}) no-repeat center/100%;
`;*/
