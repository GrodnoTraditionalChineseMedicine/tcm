import React, {Component} from 'react';
import { Divider, Row, Col } from 'antd';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import {
    PediatricWrapper,
    PediatricHeadImg,
    PediatricInfoArea,
    PediatricTitle,
    InfoArea,
    PediatricCourseArea,
    CourseItem,
    PediatricGallery
} from './style';
import {connect} from "react-redux";
import {actionCreators} from "./store";
import { photos } from "./photos";
/*import {getPediatricImages} from "../../common/util/ImagesUtil";*/

class Pediatric extends Component {
    componentDidMount() {
        const {getAllCourses} = this.props;
        getAllCourses();
    }

    render() {
        const {courses, modalIsOpen, currentImage, openLightbox, closeLightbox} = this.props;
        return (
            <PediatricWrapper>
                <PediatricHeadImg/>
                <PediatricInfoArea>
                    <PediatricTitle>小儿推拿</PediatricTitle>
                    <Divider/>
                    <InfoArea>
                        <p>小儿推拿疗法，是在其体表的特定穴位或部位施以手法，用来防病治病、助长益智的一种外治疗法。</p>
                        <p>小儿推拿是一种中医传统的保健治疗方法，推拿通过按压穴位、经络和肌肉或神经，消除阻碍淤塞,达到气血通畅。</p>
                    </InfoArea>
                    <InfoArea>
                        <h3>小儿推拿的医疗效益</h3>
                        <p>小儿推拿疗法，是根据小儿的生理以及病理特点的一种治疗法。小儿推拿对于呼吸系统、消化系统等健康问题的治疗有显著效果1；对于小儿感冒、发烧、咳嗽、腹痛、腹泻、便秘、呕吐、遗尿、夜啼、斜颈、近视等都有帮助。</p>
                        <p>除此之p，小儿推拿还具有保健功效，可以增强小儿的免疫能力，使小儿精神健旺，食欲大增，促进成长发育，健脑益智。</p>
                        <p>小儿推拿不用服药打针，因此是更容易被小儿接受的一种治疗方法。</p>
                    </InfoArea>
                    <InfoArea>
                        <h3>小儿推拿治疗是如何进行的?</h3>
                        <p>推拿治疗之前，医师会做完整的记录，包括孩子身体上的外伤、所服用的药物、曾接受过的手术治疗及生活习惯。</p>
                        <p>通常，在推拿之前，医师会要求孩子暴露即将推拿部位，然后用小毛巾盖着，以免着凉。一般上，小儿推拿操作的顺序，通常是先头面，后上肢，再胸腹、腰背，最后下肢，或者是根据患儿的具体病情做出适当有针对性的操作治疗。</p>
                        <p>手法操作的时间，根据手法的不同而各异，每次治疗一般不超过30分钟。疗程结合患儿年龄大小、身体强弱、疾病轻重等情况而定</p>
                    </InfoArea>
                    <InfoArea>
                        <h3>谁适合进行小儿推拿治疗?</h3>
                        <p>小儿推拿一般适用于6岁以下的小孩。</p>
                    </InfoArea>
                    <InfoArea>
                        <h3>推拿治疗前，需要注意什么?</h3>
                        <ul>
                            <li>不要吃太饱，也不要空肚子去治疗</li>
                            <li>穿宽松的衣服</li>
                        </ul>
                    </InfoArea>
                    <InfoArea>
                        <h3>推拿治疗后，需要注意什么？</h3>
                        <ul>
                            <li>注意避风保暖，以免遭外邪侵袭，加重病情</li>
                            <li>适量饮用温水</li>
                            <li>少食生冷、甜食、滋腻的食物</li>
                        </ul>
                    </InfoArea>
                    <InfoArea>
                        <h3>如何报名参加小儿推拿课程？</h3>
                        <ul>
                            <li>(+375) 66-324-13</li>
                        </ul>
                    </InfoArea>
                    <PediatricTitle>推拿课程</PediatricTitle>
                    <Divider/>
                    <PediatricCourseArea>
                        <Row>
                            {
                                courses.map((item)=>{
                                    return (
                                        <Col span={6} key={item.get("courseId")}>
                                            <CourseItem>
                                                <img className="course-img" alt={item.get("title")} src="https://i.loli.net/2019/11/07/92M5asNqKSdJmR4.png"/>
                                                <h4>{item.get("title")}</h4>
                                                <p className="lecturee">{item.get("lecturee")}</p>
                                                <p className="address">{item.get("address")}</p>
                                                <p className="lecture-time">{item.get("lectureTime")}</p>
                                            </CourseItem>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </PediatricCourseArea>
                    <PediatricTitle>治疗图片</PediatricTitle>
                    <Divider/>
                    <PediatricGallery>
                        {/*let formatImages = [];
                        if (typeof images.length !== "undefined"){
                            if (images.length !== 0)
                            formatImages = getPediatricImages(images);
                        }*/}
                        <Gallery photos={photos} onClick={openLightbox}/>
                        <ModalGateway>
                            { modalIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map(x => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </PediatricGallery>
                </PediatricInfoArea>
            </PediatricWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.get("pediatric").get("courses"),
        currentImage: state.get("pediatric").get("currentImage"),
        modalIsOpen: state.get("pediatric").get("modalIsOpen")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCourses(){
            dispatch(actionCreators.getPediatricCourses())
        },
        openLightbox(event, { photo, index }){
            dispatch(actionCreators.changeCurrentIndex(index));
            dispatch(actionCreators.changeOpenState(true))
        },
        closeLightbox(){
            dispatch(actionCreators.changeCurrentIndex(0));
            dispatch(actionCreators.changeOpenState(false))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pediatric);