import styled from 'styled-components';
import Hospital from "../../statics/picture/gszyy.jpg";

export const HospitalIntroWrapper = styled.div`
    width: 100%;
    position: relative;
    min-width: 1020px;
    display: block;
    overflow: hidden;
`;

export const HospitalIntroImg = styled.div`
    width: 100%;
    height: 500px;
    background: url(${Hospital}) no-repeat center/100%;
`;

export const HospitalIntroInfo = styled.div`
    box-sizing: border-box;
    width: 980px;
    min-width: 980px;
    padding: 10px 20px;
    margin: 10px auto;
    background: #fff;
`;

export const Summary = styled.div`
    padding-left: 50px;
    padding-right: 50px;
    p{
        color: #1a1a1a;
        font-size: 15px;
        line-height: 24px;
        text-indent: 2em;
        margin: 10px 0;
    }
`;

export const SummaryTitle = styled.div`
    text-align: center;
    font-size: 20px;
    color: #1a1a1a;
    font-weight: 600;
    padding-bottom: 5px;
`;