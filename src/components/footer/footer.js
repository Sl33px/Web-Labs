import React from 'react';

import './footer.css'

import FacebookIcon from "../../icons/facebook_icon.png";
import TwitterIcon from "../../icons/twitter_icon.svg";
import InstagramIcon from "../../icons/instagram_icon.svg";
import TelegramIcon from "../../icons/telegram_icon.svg";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='descr'>
                <div className='text'>
                    <h3>Hotel Diamond</h3>
                    <p>Your comfort and safety is our main aim</p>
                </div>

                <div className='footer-logo-img'>
                    <img src="https://www.hoteldiamondchico.com/wp-content/uploads/2020/07/logo-black.png" alt="logo"/>
                </div>

                <div className='icons'>
                    <img src={FacebookIcon} alt="facebook"/>
                    <img src={TwitterIcon} alt="twitter"/>
                    <img src={InstagramIcon} alt="instagram"/>
                    <img src={TelegramIcon} alt="telegram"/>
                </div>
            </div>

            <div className='copyright'>
                <p>2022 IoT &copy; Copyright all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;