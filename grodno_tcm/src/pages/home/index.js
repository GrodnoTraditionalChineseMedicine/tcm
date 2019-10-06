import React from 'react';
import {Link} from "react-router-dom";
import {Carousel} from "antd";
import {HomeWrapper, HomeCarouselWrapper} from './style';

function Home() {
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
        </HomeWrapper>
    );
}

export default Home;