import styled from 'styled-components';
import Hospital from "../../statics/picture/gszyy.jpg";

export const LearnTcmWrapper = styled.div`
    width: 100%;
    position: relative;
    min-width: 1020px;
    display: block;
    overflow: hidden;
    background-color: #f6f6f6;
`;

export const HospitalIntroImg = styled.div`
    width: 100%;
    height: 500px;
    background: url(${Hospital}) no-repeat center/100%;
`;
