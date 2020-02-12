import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {
    CenterIntroWrapper,
    CenterIntroImg,
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
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Divider} from "antd";

class HospitalIntro extends Component {
    componentDidMount() {
        this.props.getAllDoctors();
    }

    render() {
        const { doctors } = this.props;
        return (
            <CenterIntroWrapper>
                <CenterIntroImg/>
                <CenterIntroInfo>
                    <CenterIntro>
                        <Title>中心介绍</Title>
                        <Divider/>
                        <IntroWordInfo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                            tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
                            sapien nunc eget.
                        </IntroWordInfo>
                    </CenterIntro>
                    <CenterDoctor>
                        <Title>我们的医生</Title>
                        <Divider/>
                        {doctors.map((item)=>{
                            return (
                                <DoctorItem key={item.employeeId}>
                                    <DoctorImg>
                                        <img alt="Doctor's avator" src={item.avatarUrl}/>
                                    </DoctorImg>
                                    <DoctorInfo>
                                        <h3 className="name">{item.name}</h3>
                                        <p className="job-title">{item.roleName}</p>
                                        <p className="introduction">{item.employeeDescription}</p>
                                    </DoctorInfo>
                                </DoctorItem>
                            )
                        })}
                    </CenterDoctor>
                </CenterIntroInfo>
            </CenterIntroWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        doctors: state.get("cenintro").get("doctors")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllDoctors(){
            dispatch(actionCreators.getAllDoctors());
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HospitalIntro));