import React from 'react';
import logo from "../../statics/logo/logo.png";
import {Link} from "react-router-dom";
import {FooterWrapper, FooterMenu, FooterLogo, FooterContact, FooterRight, FlUs, CtUs} from './style';

function Footer() {
    return (
        <FooterWrapper>
            <FooterMenu>
                <FooterLogo>
                    <img src={logo} alt={logo}/>
                    <p>© 甘肃省中医院. All Rights Reserved.</p>
                </FooterLogo>
                <FooterContact>
                    <FlUs>
                        <h3>{/*FOLLOW US*/}关注我们</h3>
                        <span className="iconfont">&#xf25e;</span>
                        <span className="iconfont">&#xe68c;</span>
                    </FlUs>
                    <CtUs>
                        <h3>{/*CONTACT US*/}联系我们</h3>
                        <p>г.Гродно ул. Даватара 23/1</p>
                        <p>+375 (29) 307-06-40</p>
                    </CtUs>
                </FooterContact>
                <FooterRight>
                    <Link className="link-content" to="/about"><p>关于我们</p></Link>
                    <Link className="link-content" to="/help"><p>帮助</p></Link>
                    <Link className="link-content" to="/account"><p>账号</p></Link>
                    <Link className="link-content" to="/account"><p>联系我们</p></Link>
                    <Link className="link-content" to="/account"><p>隐私政策</p></Link>
                </FooterRight>
            </FooterMenu>
        </FooterWrapper>
    );
}

export default Footer;