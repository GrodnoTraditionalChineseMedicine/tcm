import styled from 'styled-components';
import Hospital from "../../statics/picture/nomatch.jpg";

export const NoMatchWrapper = styled.div`
    width: 100%;
    position: relative;
    min-width: 1020px;
    display: block;
    overflow: hidden;
`;

export const NoMatchImgDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    max-height: 720px;
    background: url(${Hospital}) no-repeat center/100%;
`;

export const LeftNoFound = styled.div`
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const NoFoundText = styled.div`
    position: relative;
    h1{
        font-size: 80px;
        color: #555555;
    }
    p{
        font-size: 16px;
    }
`;

export const ReturnButton = styled.button`
    width: auto;
    font-size: 14px;
    padding: 8px 30px;
    border: 2px solid #fafafa;
    color: #fafafa;
    background: none;
    cursor: pointer;
    transition: .5s;
    &:hover{
        color: #1a1a1a;
        border: 2px solid #1a1a1a;
    }
`;