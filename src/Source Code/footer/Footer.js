import React from 'react'
import "./Footer.scss"
import PhoneIcons from "../images/contact icons/Phone.png"
import mailIcons from "../images/contact icons/Mail.png"
import locationIcons from "../images/contact icons/Location.png"
import FacebookIcons from "../images/icons/facebook.png"
import TwitterIcons from "../images/icons/twitter.png"
import LinkedInIcons from "../images/icons/linkedin.png"
import BehanceIcons from "../images/icons/behance.png"
import InstagramIcons from "../images/icons/instagram.png"

export default function Footer() {
    return (
        <div className='Footer' id='Contact' data-aos="fade-up">
            <div className="title">
                Get In Touch
            </div>
            <div className="container mt-5" >
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4" id='contactMe'>
                        <div className="row">
                            <div className="col-4 contact">
                                <div className='ContactIcons'>
                                    <img src={PhoneIcons} alt="" />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="Contact mt-3">
                                    Contact
                                </div>
                                <div className="phoneNumber mt-4">
                                    +91 9626490807
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4" id='contactMe'>
                        <div className="row">
                            <div className="col-4">
                                <div className='ContactIcons p-3'>
                                    <img src={mailIcons} alt="" />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="Contact mt-3">
                                    Email
                                </div>
                                <div className="phoneNumber mt-4">
                                    <a href="jaberson98@gmail.com">jaberson98@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4" id='contactMe'>
                        <div className="row">
                            <div className="col-4">
                                <div className='ContactIcons p-3'>
                                    <img src={locationIcons} alt="" />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="Contact mt-3">
                                    Location
                                </div>
                                <div className="phoneNumber mt-4">
                                    Colachel, Tamilnadu, India.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialMediaIcons ">
                <div className="socialMediaLogos d-flex justify-content-start">
                    <img src={FacebookIcons} alt="facebook" />
                    <img src={InstagramIcons} alt="insta" />
                    <img src={TwitterIcons} alt="twitter" />
                    <img src={LinkedInIcons} alt="linkedIn" />
                    <img src={BehanceIcons} alt="Behance" />
                </div>
            </div>

        </div>
    )
}
