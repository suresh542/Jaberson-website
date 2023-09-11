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
import Figma from "../images/skills image/Figma.png"
import AdobeXD from "../images/skills image/AdobeXD.png"
import AdobePS from "../images/skills image/AdobePS.png"
import AdobeI from "../images/skills image/AdobeI.png"
import Resume from "../resume/Resume - Jaberson.pdf"




export default function MainPage() {
    return (
        <div className='JabersonWebPage d-block'>
            <div className="header">
                <Header />
            </div>
            <div className="MainBody">
                <div className="introductions ">
                    <div className="row">
                        <div className="col-md-4 ps-md-5 ">
                            <div className='IntoContant'>
                                <div className="socialMediaLogos d-flex justify-content-start">
                                    <img src={FacebookIcons} alt="facebook" />
                                    <img src={InstagramIcons} alt="insta" />
                                    <img src={TwitterIcons} alt="twitter" />
                                    <img src={LinkedInIcons} alt="linkedIn" />
                                    <img src={BehanceIcons} alt="Behance" />


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
                            <div className='myImage'>
                                <img src={Hello} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="AboutMe" id='AboutMe' data-aos="fade-up">
                    <div className="row" >
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="AboutMeImage p-1">
                                <img src={AboutMe} alt="" />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 ">
                            <div className='mt-5'>
                                <div className="title">
                                    About Me
                                </div>
                                <div className="HiThere mt-5 ">
                                    <span className='border border-light'> Hi There</span>
                                </div>
                                <div className="content mt-5">
                                    I'm a UI/UX Designer based in Tamilnadu India, with a passion for designing beautiful
                                    and functional user experiences. I love making digital things look great and work even
                                    better. I'm super excited about learning new things and stay up-to-date with the latest
                                    design trends. Let's create something amazing together!
                                </div>
                                <div className="buttonsHere mt-5 ">
                                    <div className="hereMe1">
                                        <div className='d-flex'>
                                            <div>
                                                <a href="#Contact">
                                                    <button type='button' className='btn hereMe text-uppercase p-3' id='hereMe'>
                                                        <span>Hire Me</span>
                                                    </button></a>
                                            </div>
                                            <div>
                                                <a href="#Contact" className='text-decoration-none'>
                                                    <i class="fa-solid fa-arrow-right ms-2 "></i></a>
                                            </div>
                                        </div>
                                        <div className='CVBtnHere'>
                                            <button type="button" className='btn CVBtns ms-md-5 text-uppercase' id='CVBtns'> <a href={Resume} className='text-decoration-none resumeBtn'><span>Download my cv</span></a></button>
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
            </div>
            <div className='ApplicationsUIUX'>
                <div className="row p-0">
                    <div className="col-md-3 p-0">
                        <div className=''>
                            <span>Figma</span>
                            <img src={Figma} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div>
                            <span>Adobe XD</span>
                            <img src={AdobeXD} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div>
                            <span>Adobe Photoshop</span>
                            <img src={AdobePS} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div>
                            <span>
                                Adobe Illustrator
                            </span>
                            <img src={AdobeI} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
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
