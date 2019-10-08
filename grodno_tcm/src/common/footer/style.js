import styled from "styled-components";

export const FooterWrapper = styled.div`
    position: relative;
    z-index: 100;
    min-width: 1020px;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #303952;
`;

export const FooterMenu = styled.div`
    width: 1020px;
    height: 300px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

export const FooterLogo = styled.div`
    width: calc(100% / 10 * 4);
    float: left;
    img{
      width: 70%;
    }
    p{
      font-size: 12px;
      padding-top: 10px;
      color: #95a5a6;
    }
`;

export const FooterContact = styled.div`
    width: calc(100% / 10 * 3);
    float: left;
    h3{
      color: #bdc3c7;
      line-height: 1.5;
      font-weight: 700;
      font-size: 14px;
    }
`;

export const FlUs = styled.div`
    .iconfont{
      color: #ecf0f1;
      font-size: 1.7em;
      margin-right: 15px;
    }
    
`;

export const CtUs = styled.div`
    padding-top: 30px;
    p{
      color: #ecf0f1;
      line-height: 1;
    }
`;

export const FooterRight = styled.div`
    width: calc(100% / 10 * 3);
    float: left;
    .link-content{
      color: #ecf0f1;
      font-weight: bold;
    }
`;