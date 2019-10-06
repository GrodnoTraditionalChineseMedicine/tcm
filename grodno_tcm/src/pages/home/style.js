import styled from "styled-components";
import PicTest from "../../statics/picture/1.jpg";

export const HomeWrapper = styled.div`
    position: relative;
    z-index: 100;
    min-width: 1180px;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
`;

export const HomeCarouselWrapper = styled.div`
    width: 1180px;
    margin: 0 auto;
    padding: 0 20px;
    div{
      background: url(${PicTest}) no-repeat center/100%;
/*      background-size: 100% 100%;*/
    }
    
    .ant-carousel .slick-slide {
      text-align: center;
      height: 600px;
      overflow: hidden;
      line-height: 600px;
      background: #364d79;
      }
    
    .ant-carousel .slick-slide h3 {
      color: #fff;
    }
`;
