import React from 'react';
import logo from "../../statics/logo/logo.png";
import {Link} from "react-router-dom";
import {FooterWrapper, FooterMenu, FooterLogo, FooterContact, FooterRight, FlUs, CtUs} from './style';
import {FormattedMessage} from "react-intl";

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
                        <h3>{/*FOLLOW US*/}<FormattedMessage id="components.footer.follow" defaultMessage="关注我们"/></h3>
                        <a className="link" href="https://vk.com/id525362060" target="_blank"><span className="iconfont">&#xf25e;</span></a>
                        <a className="link" href="https://www.instagram.com/chinese_medicine_center/" target="_blank"><span className="iconfont">&#xe68c;</span></a>
                    </FlUs>
                    <CtUs>
                        <h3>{/*CONTACT US*/}<FormattedMessage id="components.footer.contact" defaultMessage="联系我们"/></h3>
                        <p>г.Гродно ул. Даватара 23/1</p>
                        <p>+375 (29) 307-06-40</p>
                    </CtUs>
                </FooterContact>
                <FooterRight>
                    <Link className="link-content" to="/about"><p><FormattedMessage id="components.footer.about" defaultMessage="关于我们"/></p></Link>
                    <Link className="link-content" to="/help"><p><FormattedMessage id="components.footer.help" defaultMessage="帮助"/></p></Link>
                    <Link className="link-content" to="/manage"><p><FormattedMessage id="components.footer.account" defaultMessage="账号"/></p></Link>
                    <Link className="link-content" to="/contact"><p><FormattedMessage id="components.footer.contact" defaultMessage="联系我们"/></p></Link>
                    <Link className="link-content" to="/privacy"><p><FormattedMessage id="components.footer.privacy" defaultMessage="隐私政策"/></p></Link>
                </FooterRight>
            </FooterMenu>
        </FooterWrapper>
    );
}

export default Footer;