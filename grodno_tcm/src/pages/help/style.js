import styled from 'styled-components';
import Hospital from "../../statics/picture/help.jpg";

export const HelpWrapper = styled.div`
    width: 100%;
    position: relative;
    min-width: 1020px;
    display: block;
    overflow: hidden;
`;

export const HospitalIntroImg = styled.img`
    width: 100%;
    height: 500px;
    background: url(${Hospital}) no-repeat center/100%;
`;

export const HelpInfo = styled.div`
    width: 980px;
    min-width: 980px;
    padding: 10px 20px;
    margin: 10px auto;
    background: #fff;
    .site-collapse-custom-collapse .site-collapse-custom-panel {
      background: #f7f7f7;
      border-radius: 2px;
      margin-bottom: 10px;
      border: 0px;
      overflow: hidden;
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {{
      background-color: #555555;
      color: #f0f0f0;
      font-weight: 600;
      font-size: 16px;
    }
`;