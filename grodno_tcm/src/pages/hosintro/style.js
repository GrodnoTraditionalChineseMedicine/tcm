import styled from 'styled-components';
import Hospital from "../../statics/picture/gszyy.jpg";

export const HospitalIntroWrapper = styled.div`
    width: 100%;
    position: relative;
    min-width: 1060px;
    display: block;
    overflow: hidden;
    background-color: #f6f6f6;
`;

export const HospitalIntroImg = styled.div`
    width: 100%;
    height: 500px;
    background: url(${Hospital}) no-repeat center/100%;
`;

export const HospitalIntroInfo = styled.div`
    width: 1060px;
    min-width: 1060px;
    padding: 10px 20px;
    margin: 0 auto;
    background: #fff;
`;