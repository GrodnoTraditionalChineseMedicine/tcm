import React from 'react';
import {
    NoMatchImgDiv,
    NoMatchWrapper,
    LeftNoFound,
    NoFoundText,
    ReturnButton
} from './style';
import {Link} from "react-router-dom";

function HospitalIntro() {
    return (
        <NoMatchWrapper>
            <NoMatchImgDiv>
                <LeftNoFound>
                    <NoFoundText>
                        <h1>404</h1>
                        <p>很抱歉，您要访问的页面不存在！</p>
                        <Link to="/"><ReturnButton>回到首页</ReturnButton></Link>
                    </NoFoundText>
                </LeftNoFound>
            </NoMatchImgDiv>
        </NoMatchWrapper>
    );
}

export default HospitalIntro;