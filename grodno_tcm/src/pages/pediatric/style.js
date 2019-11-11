import styled from 'styled-components';
import Hospital from "../../statics/picture/3.jpg";

export const PediatricWrapper = styled.div`
    width: 100%;
    position: relative;
    min-width: 1020px;
    display: block;
    overflow: hidden;
`;

export const PediatricHeadImg = styled.div`
    width: 100%;
    height: 500px;
    background: url(${Hospital}) no-repeat center/100%;
`;

export const PediatricInfoArea = styled.div`
    width: 980px;
    min-width: 980px;
    padding: 10px 20px;
    margin: 10px auto;
    background: #fff;
`;

export const PediatricTitle = styled.h1`
    padding-top: 20px;
    font-size: 24px;
    color: #1f1f1f;
    font-weight: 700;
`;

export const InfoArea = styled.div`
    h3{
        padding-top: 10px;
        padding-bottom: 5px;
        color: #1f1f1f;
        font-size: 18px;
        font-weight: 700;
    }
    p, ul{
        color: #333333;
        font-size: 16px;
        font-weight: 400;
    }
`;

export const PediatricCourseArea = styled.div`
    .ant-col{
        padding: 10px 15px;
    }
`;

export const CourseItem = styled.div`
    background: #f1f1f1;
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
    overflow: hidden;
    h4{
        font-weight: 600;
        text-align: center;
        margin-top: 0.5em;
        margin-bottom: 0.3em;
    }
    .course-img{
        width: 100%;
    }
    p{
        padding: 0;
        margin: 0;
        font-size: 12px;
    }
    .lecturee{
        font-weight: 600;
        text-align: center;
    }
    .address{
        float: left;
        font-size: 10px;
    }
    .lecture-time{
        float: right;
        font-size: 10px;
    }
`;

export const PediatricGallery = styled.div`

`;