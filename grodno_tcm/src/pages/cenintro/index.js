import React from 'react';
import avator from "../../statics/picture/avator.jpg";
import {Link} from "react-router-dom";
import Hospital from "../../statics/picture/gszyy.jpg";
import {
    CenterIntroWrapper,
    CenterIntroInfo,
    Title,
    CenterIntro,
    IntroWordInfo,
    IntroImgInfo,
    CenterDoctor,
    DoctorItem,
    DoctorImg,
    DoctorInfo
} from './style';

function HospitalIntro() {
    return (
        <CenterIntroWrapper>
            <CenterIntroInfo>
                <CenterIntro>
                    <Title>CENTER INTRODUCTION</Title>
                    <IntroWordInfo>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                    </IntroWordInfo>
                    <IntroImgInfo>
                        <img alt="center's img" src={Hospital}/>
                    </IntroImgInfo>
                </CenterIntro>
                <CenterDoctor>
                    <Title>OUR DOCTORS</Title>
                    <DoctorItem>
                        <DoctorImg>
                            <img alt="Doctor's avator" src={avator}/>
                        </DoctorImg>
                        <DoctorInfo>
                            <h3 className="name">王守仁</h3>
                            <p className="job-title">主治医师</p>
                            <p className="introduction">甘肃省中医院院长。国务院特殊津贴专家，卫生部有突出贡献的中青年专家，第二届全国百名杰出青年中医，甘肃省优秀专家，甘肃省“555”创新人才，甘肃省领军人才，甘肃省名中医，甘肃省卫生厅系统优秀青年，甘肃省群众喜爱的中青年名中医，国家级重点专（学）科负责人，甘肃省第五、第六批师承指导老师，中国中医药研究促进会专科专病建设工作委员会副会长，首届甘肃省老年医学会副会长，甘肃省伦理学会副会长，甘肃省老年医学会脊柱疾患专业委员会主任委员。</p>
                        </DoctorInfo>
                    </DoctorItem>
                    <DoctorItem>
                        <DoctorImg>
                            <img alt="Doctor's avator" src={avator}/>
                        </DoctorImg>
                        <DoctorInfo>
                            <h3 className="name">王锋</h3>
                            <p className="job-title">主治医师</p>
                            <p className="introduction">甘肃省中医院副院长。国务院特殊津贴专家，卫生部有突出贡献的中青年专家，第二届全国百名杰出青年中医，甘肃省优秀专家，甘肃省“555”创新人才，甘肃省领军人才，甘肃省名中医，甘肃省卫生厅系统优秀青年，甘肃省群众喜爱的中青年名中医，国家级重点专（学）科负责人，甘肃省第五、第六批师承指导老师，中国中医药研究促进会专科专病建设工作委员会副会长，首届甘肃省老年医学会副会长，甘肃省伦理学会副会长，甘肃省老年医学会脊柱疾患专业委员会主任委员。</p>
                        </DoctorInfo>
                    </DoctorItem>
                </CenterDoctor>
            </CenterIntroInfo>
        </CenterIntroWrapper>
    );
}

export default HospitalIntro;