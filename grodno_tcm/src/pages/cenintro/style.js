import styled from 'styled-components';

export const CenterIntroWrapper = styled.div`
    width: 100%;
    position: relative;
    min-width: 1020px;
    display: block;
    overflow: hidden;
    background-color: #f6f6f6;
`;

export const CenterIntroInfo = styled.div`
    width: 980px;
    min-width: 980px;
    padding: 10px 20px;
    margin: 10px auto;
    background: #fff;
`;

export const Title = styled.div`
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 18px;
    color: #95a5a6;
    letter-spacing: 2px;
    text-align: center;
`;

export const CenterIntro = styled.div`
    
`;

export const IntroWordInfo = styled.div`
    height: 100%;
    width: 65%;
    display: table-cell;
    vertical-align: middle;
    padding: 0 20px 0 20px;
    position: relative;
    font-size: 15px;
    color: #1a1a1a;
`;

export const IntroImgInfo = styled.div`
    display: table-cell;
    height: 100%;
    width: 35%;
    vertical-align: middle;
    position: relative;
    img{
      width: 100%;
    }
`;

export const CenterDoctor = styled.div`
    margin-top: 20px;
`;

export const DoctorItem = styled.div`
    width: 100%;
    padding: 20px;
`;

export const DoctorImg = styled.div`
    display: table-cell;
    height: 100%;
    width: 20%;
    vertical-align: middle;
    position: relative;
    img{
      width: 100%;
      border-radius: 50%;
    }
`;

export const DoctorInfo = styled.div`
    height: 100%;
    width: 80%;
    display: table-cell;
    vertical-align: middle;
    padding: 0 25px 0 25px;
    position: relative;
    font-size: 15px;
    .name{
      font-size: 18px;
      color: #444444;
      font-weight: 600;
    }
    .job-title{
      font-size: 14px;
      color: #646464;
      margin: 5px 0;
    }
    .introduction{
      font-size: 15px;
      color: #1a1a1a;
      margin-top: 5px;
    }
`;