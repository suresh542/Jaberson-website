import React from 'react'
import "./MainPage.scss"
import Header from '../Header/Header'
import Hello from "../images/Hello.png"
import AboutMe from "../images/About.png"
import MySkills from './MySkills'
import Portfolio from "./Portfolio"
import Footer from '../footer/Footer'
import FacebookIcons from "../images/icons/facebook.png"
import TwitterIcons from "../images/icons/twitter.png"
import LinkedInIcons from "../images/icons/linkedin.png"
import BehanceIcons from "../images/icons/behance.png"
import InstagramIcons from "../images/icons/instagram.png"

export default function MainPage() {
    return (
        <div className='JabersonWebPage'>
            <div className="header">
                <Header />
            </div>
            <div className="MainBody">
                <div className="introductions ">
                    <div className="row">
                        <div className="col-md-4 ps-md-5 ">
                            <div className=' pe-0'>
                                <div className="socialMediaLogos d-flex justify-content-start">
                                    <img src={FacebookIcons} alt="" />
                                    <img src={InstagramIcons} alt="" />
                                    <img src={TwitterIcons} alt="" />
                                    <img src={LinkedInIcons} alt="" />
                                    <img src={BehanceIcons} alt="" />


                                </div>
                                <div className="myName mt-md-3  d-flex justify-content-start">
                                    I'm Jaberson
                                </div>
                                <div className="designations mt-md-3">
                                UI/UX Designer
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className='myImage pe-md-5'>
                                <img src={Hello} alt="" width={"100%"} height={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AboutMe" id='AboutMe' data-aos="fade-up">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="AboutMeImage ">
                                <img src={AboutMe} alt="" />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 ">
                            <div className=''>
                                <div className="title">
                                    About Me
                                </div>
                                <div className="HiThere mt-5 ">
                                    <span className='border border-light'> Hi There</span>
                                </div>
                                <div className="content mt-5">
                                    I'm a UI/UX Designer based in Tamilnadu India, with a passion for designing
                                    beautiful and functional user experiences. I'm passionate about improving the
                                    lives of others through design and am constantly looking to learn new things everyday.
                                </div>
                                <div className="buttonsHere mt-5 ">
                                    <div className="hereMe1">
                                        <div className='d-flex'>
                                            <div>
                                                <button type='button' className='btn hereMe text-uppercase p-3' id='hereMe'>
                                                    <span>Hire Me</span>
                                                </button>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-arrow-right ms-2 "></i>
                                            </div>
                                        </div>
                                        <div className='CVBtnHere'>
                                            <button type="button" className='btn CVBtns ms-md-5 text-uppercase' id='CVBtns'><span>Download my cv</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MySkills ps-md-5 pe-md-5">
                    <MySkills />
                </div>

                <div className="Portfolio ps-md-5 pe-md-5">
                    <Portfolio />
                </div>

                <div className="footer ps-md-5 pe-md-5">
                    <Footer />
                </div>
            </div>
            <div className="byJaberson ">
                @ 2023 by Jaberson
            </div>
        </div>
    )
}
