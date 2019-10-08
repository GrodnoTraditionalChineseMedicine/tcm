import styled from "styled-components";
import PicTest from "../../statics/picture/2.jpg";


export const HomeWrapper = styled.div`
    position: relative;
    z-index: 100;
    min-width: 1060px;
    display: block;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    background-color: #f6f6f6;
`;

export const HomeCarouselWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    div{
      background: url(${PicTest}) no-repeat center/100%;
/*      background-size: 100% 100%;*/
    }
    
    .ant-carousel .slick-slide {
      text-align: center;
      height: 500px;
      overflow: hidden;
      line-height: 500px;
      background: #364d79;
      }
    
    .ant-carousel .slick-slide h3 {
      color: #fff;
    }
`;

export const DynamicAnnounceWrapper = styled.div`
    width: 100%;
    padding: 20px 0;
    margin-top: 20px;
    box-sizing: border-box;
    background-color: #fff;
`;

export const DynamicArea = styled.div`
    width: 1060px;
    min-width: 1060px;
    padding: 10px 20px;
    margin: 0 auto;
    h3{
      color: #1a1a1a;
      font-size: 25px;
      font-weight: 600;
      padding: 5px 0;
    }
`;

export const DynamicList = styled.div`
    padding: 5px 20px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
`;

export const DynamicItem = styled.div`
    height: 30px;
    cursor: pointer;
    &:hover{
      color: #333333;
    }
    .title{
      width: 90%;
      float: left;
      font-weight: 600;
    }
    
    .time{
      float: right;
    }
`;

export const HomeVideoWrapper = styled.div`
    width: 1060px;
    margin: 20px auto;
    padding: 10px 20px;
`;

export const TuinaWrapper = styled.div`
    
    width: 100%;
    padding: 20px 0;
    margin-top: 20px;
    box-sizing: border-box;
    background-color: #fff;
`;

export const TuinaArea = styled.div`
    width: 1060px;
    margin: 20px auto;
    padding: 0 20px;
    position: relative;
`;

export const TuinaIntro = styled.div`
    width: 70%;
    float: left;
    padding-right: 20px;
    h3{
    border-bottom: 1px solid #bdc3c7;
      font-weight: 600;
      font-size: 25px;
      color: #1a1a1a;
    }
    p{
      font-size: 14px;
      color: #7f8c8d;
    }
    .button{
      position: absolute;
      bottom: 0;
    }
`;

export const TuinaImg = styled.div`
    width: 30%;
    height: 200px;
    background-color: red;
    display: inline-block;
    position: relative;
    overflow: hidden;
`;

export const MapTitle = styled.div`
    width: 1060px;
    font-size: 16px;
    color: #95a5a6;
    letter-spacing: 2px;
    margin: 20px auto;
    padding: 10px 20px;
    text-align: center;
`;

export const HomeMapWrapper = styled.div`
    width: 1060px;
    margin: 20px auto;
    padding: 10px 20px;
    display: flex;
    align-items: center;
`;

export const MapContainer = styled.div`
    width: 60%;
    height: 320px;
    display: inline-block;
    position: relative;
    overflow: hidden;
`;

export const MapContactInfo = styled.div`
    width: 40%;
    float: right;
    padding-left: 20px;
    color: #1a1a1a;
    font-weight: 600;
    box-sizing: border-box;
    h3{
      font-size: 25px;
      font-weight: 600;
    }
    .ant-row-flex{
      padding: 5px 0;
    }
    .iconfont{
      font-size: 30px;
    }
    .title{
      font-size: 16px;   
    }
    .detail{
      font-weight: normal;
      font-size: 14px;
      color: #555;
    }
`;