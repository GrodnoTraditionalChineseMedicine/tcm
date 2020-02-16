import React, {Component} from "react";
import {Carousel, Divider, Row, Col, Button} from "antd";
import {
    HomeWrapper,
    HomeCarouselWrapper,
    CarouselItem,
    DynamicAnnounceWrapper,
    DynamicArea,
    MomentItem,
    MomentImage,
    MomentContent,
    HomeButton,
    HomeVideoWrapper,
    TuinaWrapper,
    TuinaArea,
    TuinaIntro,
    TuinaImg,
    HomeMapWrapper,
    MapContainer,
    MapContactInfo,
    MedicalWayList,
    MedicalItem,
    HomeContent, MedicalWayContent, MedicalIcon, MedicalTitle,
} from './style';
import "video-react/dist/video-react.css";
import {Link, withRouter} from "react-router-dom";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {actionCreators as headAC} from "../../common/header/store";
import {FormattedMessage} from "react-intl";
import YouTube from "react-youtube";

const opts = {
    width: '100%',
    height: '630',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        iv_load_policy: 3,
        loop: 1
    }
};

class Home extends Component {
    render() {
        const { moments, carousels, handleChangeKey } = this.props;
        return (
            <HomeWrapper>
                <HomeCarouselWrapper>
                    <Carousel autoplay dotPosition="right">
                        {carousels.map((item)=>{
                            return <CarouselItem key={item.fileId} imgUrl={item.filePath}><h3>{item.fileId}</h3></CarouselItem>
                        })}
                    </Carousel>
                </HomeCarouselWrapper>
                <HomeContent>
                    <MedicalWayContent>
                        <MedicalWayList>
                            <Row>
                                <Col span={4}>
                                    <MedicalItem>
                                        <MedicalIcon><span className="iconfont">&#xe60b;</span></MedicalIcon>
                                        <MedicalTitle>Pediatrics</MedicalTitle>
                                    </MedicalItem>
                                </Col>
                                <Col span={4}>
                                    <MedicalItem>
                                        <MedicalIcon><span className="iconfont">&#xe65b;</span></MedicalIcon>
                                        <MedicalTitle>Acupuncture</MedicalTitle>
                                    </MedicalItem>
                                </Col>
                                <Col span={4}>
                                    <MedicalItem>
                                        <MedicalIcon><span className="iconfont">&#xe83a;</span></MedicalIcon>
                                        <MedicalTitle>Conditioning</MedicalTitle>
                                    </MedicalItem>
                                </Col>
                                <Col span={4}>
                                    <MedicalItem>
                                        <MedicalIcon><span className="iconfont">&#xe690;</span></MedicalIcon>
                                        <MedicalTitle>Cupping</MedicalTitle>
                                    </MedicalItem>
                                </Col>
                                <Col span={4}>
                                    <MedicalItem>
                                        <MedicalIcon><span className="iconfont">&#xe609;</span></MedicalIcon>
                                        <MedicalTitle>Primary Care</MedicalTitle>
                                    </MedicalItem>
                                </Col>
                                <Col span={4}>
                                    <MedicalItem>
                                        <MedicalIcon><span className="iconfont">&#xe749;</span></MedicalIcon>
                                        <MedicalTitle>Massage</MedicalTitle>
                                    </MedicalItem>
                                </Col>
                            </Row>
                        </MedicalWayList>
                    </MedicalWayContent>
                    <DynamicAnnounceWrapper>
                        <DynamicArea>
                            <Row>
                                {moments.map((item)=>{
                                    let length = moments.length;
                                    return (
                                        <Col key={item.momentId} span={24 / length}>
                                            <MomentItem>
                                                <MomentImage imgUrl={item.images[0].filePath}/>
                                                <MomentContent>
                                                    <h2>{item.momentTitle}</h2>
                                                    <p>{item.momentContent}</p>
                                                    <div><HomeButton>了解</HomeButton></div>
                                                </MomentContent>
                                            </MomentItem>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </DynamicArea>
                    </DynamicAnnounceWrapper>
                    <HomeVideoWrapper>
                        <YouTube
                            opts={opts}
                            videoId="WO8mrVjW0-c"
                        />
                    </HomeVideoWrapper>
                    <TuinaWrapper>
                        <TuinaArea>
                            <TuinaIntro>
                                <h3>小儿推拿</h3>
                                <Divider/>
                                <p>
                                    小儿推拿疗法，是在其体表的特定穴位或部位施以手法，用来防病治病、助长益智的一种外治疗法。
                                    小儿推拿是一种中医传统的保健治疗方法，推拿通过按压穴位、经络和肌肉或神经，消除阻碍淤塞,达到气血通畅。
                                </p>
                                <Button type="primary" className="button" size="large" onClick={handleChangeKey}><Link to="/pediatric">加入课程</Link></Button>
                            </TuinaIntro>
                            <TuinaImg/>
                        </TuinaArea>
                    </TuinaWrapper>
                    <HomeMapWrapper>
                        <YMaps>
                            <MapContainer>
                                <Map
                                    width="100%"
                                    height="100%"
                                    defaultState={{ center: [53.694199, 23.828642], zoom: 17 }} >
                                    <Placemark defaultGeometry={[53.694199, 23.828642]} />
                                </Map>
                            </MapContainer>
                            <MapContactInfo>
                                <h3>联系方式</h3>
                                <Divider/>
                                <Row type="flex" justify="space-around" align="middle" gutter={8}>
                                    <Col span={3}><span className="iconfont">&#xe625;</span></Col>
                                    <Col span={21}>
                                        <span className="title"><FormattedMessage id="home.contact.address.title" defaultMessage="Адрес:"/></span><br/>
                                        <span className="detail"><FormattedMessage id="home.contact.address.content" defaultMessage="г.Гродно ул. Даватара 23"/></span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" align="middle" gutter={8}>
                                    <Col span={3}><span className="iconfont">&#xe61b;</span></Col>
                                    <Col span={21}>
                                        <span className="title"><FormattedMessage id="home.contact.telephone.title" defaultMessage="Телефоны:"/></span><br/>
                                        <span className="detail"><FormattedMessage id="home.contact.telephone.content" defaultMessage="+375 (29) 307-06-40"/></span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" align="middle" gutter={8}>
                                    <Col span={3}><span className="iconfont">&#xe600;</span></Col>
                                    <Col span={21}>
                                        <span className="title"><FormattedMessage id="home.contact.time.title" defaultMessage="Рабочее время:"/></span><br/>
                                        <span className="detail"><FormattedMessage id="home.contact.time.content" defaultMessage="Пн-Пт: 8:00-23:00 сб 9.00-21.00 вс 11.00 до 20.00"/></span>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="space-around" align="middle" gutter={8}>
                                    <Col span={3}><span className="iconfont">&#xe617;</span></Col>
                                    <Col span={21}>
                                        <span className="title"><FormattedMessage id="home.contact.email.title" defaultMessage="Эл. адрес:"/></span><br/>
                                        <span className="detail"><FormattedMessage id="home.contact.email.content" defaultMessage="xinghanluo@gmail.com"/></span>
                                    </Col>
                                </Row>
                            </MapContactInfo>
                        </YMaps>
                    </HomeMapWrapper>
                </HomeContent>
            </HomeWrapper>
        );
    }
    componentDidMount() {
        const { getAllMomentNews, getAllCarousels } = this.props;
        getAllMomentNews();
        getAllCarousels();
    }
}

const mapStateToProps = (state) => {
    return {
        moments: state.get("home").get("moments"),
        carousels: state.get("home").get("carousels")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMomentNews(){
            dispatch(actionCreators.getAllMomentNews());
        },
        getAllCarousels(){
            dispatch(actionCreators.getAllCarousels())
        },
        handleChangeKey(e){
            console.log(e);
            dispatch(headAC.changeTheSelectedKey(e))
        }
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));