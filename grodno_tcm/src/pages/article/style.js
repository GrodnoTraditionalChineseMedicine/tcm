import styled from "styled-components";

export const ArticleDetailWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-top: 68px;
    min-width: 1020px;
    display: block;
    overflow: hidden;
`;

export const DetailInfo = styled.div`
    box-sizing: border-box;
    width: 700px;
    min-width: 700px;
    padding: 10px 10px;
    margin: 10px auto;
    border-radius: 5px;
    background: #f1f1f1;
    .title-img{
        width: 100%;
    }
    h1{
        font-weight: 600;
        font-synthesis: style;
        color: #1a1a1a;
        font-size: 26px;
        line-height: 1.22;
        margin: 15px 0;
        word-wrap: break-word;
    }
`;

export const TitleLine = styled.div`
    margin-top: 5px;
    width: 50px;
    height: 2px;
    background-color: #52c41a;
`;