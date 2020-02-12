import React from 'react';
import {
    NoMatchDiv,
    NoMatchWrapper,
    NoMatchContent,
    NoFoundImage,
    NoFoundText
} from './style';
import {Link} from "react-router-dom";
import NoFound from "../../statics/picture/404_page_not_found.png";

function HospitalIntro() {
    return (
        <NoMatchWrapper>
            <NoMatchDiv>
                <NoMatchContent>
                    <NoFoundImage>
                        <img src={NoFound} alt="No Found Image"/>
                    </NoFoundImage>
                    <NoFoundText>
                        <h1>页面不存在</h1>
                        <p>对不起！您似乎迷路了。您可以检查地址是否正确，或者<Link to="/">返回首页</Link>。</p>
                    </NoFoundText>
                </NoMatchContent>
            </NoMatchDiv>
        </NoMatchWrapper>
    );
}

export default HospitalIntro;