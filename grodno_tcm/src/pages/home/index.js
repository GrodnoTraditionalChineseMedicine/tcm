import React, {Component} from "react";
import {Carousel, Divider, Row, Col, Button} from "antd";
import {
    HomeWrapper,
    HomeCarouselWrapper,
    DynamicAnnounceWrapper,
    DynamicArea,
    DynamicList,
    DynamicItem,
    HomeVideoWrapper,
    TuinaWrapper,
    TuinaArea,
    TuinaIntro,
    TuinaImg,
    MapTitle,
    HomeMapWrapper,
    MapContainer,
    MapContactInfo
} from './style';
import "video-react/dist/video-react.css";
import {Player} from "video-react";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import homeVideo from "../../statics/video/FishingBoat.mp4";
import {connect} from "react-redux";

class Home extends Component {
    render() {
        const data = [
            {
                title: '关于庆祝中华人名共和国建国70周年的放假通知',
                time: "2019/09/29"
            },
            {
                title: '我院接见白俄罗斯格罗德诺州州长，进行两国之间的文化交流',
                time: "2019/07/05"
            },
            {
                title: '关于我院对外开放参观日和开设小儿推拿课程的通知',
                time: "2019/04/12"
            }
        ];
        return (
            <HomeWrapper>
                <HomeCarouselWrapper>
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </HomeCarouselWrapper>
                <DynamicAnnounceWrapper>

                    <DynamicArea>
                        <h3>最新公告</h3>
                        <Divider/>
                        <DynamicList>
                            {data.map((item)=>{
                                return (
                                    <DynamicItem key={item.title}>
                                        <p className="title">{item.title}</p>
                                        <p className="time">{item.time}</p>
                                    </DynamicItem>
                                )
                            })}

                        </DynamicList>
                    </DynamicArea>
                </DynamicAnnounceWrapper>
                <HomeVideoWrapper>
                    <Player
                        playsInline
                        src={homeVideo}
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
                            <Button className="button" size="large">加入课程</Button>
                        </TuinaIntro>
                        <TuinaImg/>
                    </TuinaArea>
                </TuinaWrapper>
                <MapTitle>OUR LOCATION</MapTitle>
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
                                    <span className="title">Адрес:</span><br/>
                                    <span className="detail">г.Гродно ул. Даватара 23</span>
                                </Col>
                            </Row>
                            <Row type="flex" justify="space-around" align="middle" gutter={8}>
                                <Col span={3}><span className="iconfont">&#xe61b;</span></Col>
                                <Col span={21}>
                                    <span className="title">Телефоны:</span><br/>
                                    <span className="detail">+375 (29) 307-06-40</span>
                                </Col>
                            </Row>
                            <Row type="flex" justify="space-around" align="middle" gutter={8}>
                                <Col span={3}><span className="iconfont">&#xe600;</span></Col>
                                <Col span={21}>
                                    <span className="title">Рабочее время:</span><br/>
                                    <span className="detail">Пн-Пт: 8:00-23:00 сб 9.00-21.00 вс 11.00 до 20.00</span>
                                </Col>
                            </Row>
                            <Row type="flex" justify="space-around" align="middle" gutter={8}>
                                <Col span={3}><span className="iconfont">&#xe617;</span></Col>
                                <Col span={21}>
                                    <span className="title">Email:</span><br/>
                                    <span className="detail">xinghanluo@gmail.com</span>
                                </Col>
                            </Row>
                        </MapContactInfo>
                    </YMaps>
                </HomeMapWrapper>
            </HomeWrapper>
        );
    }
    componentDidMount() {
        // this.props.handleGetImgs();
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        /*handleGetImgs(){
            dispatch(actionCreators.getBuskerInfo());
        }*/
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);