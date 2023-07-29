import React from 'react'
import "./Footer.scss"

export default function Footer() {
    return (
        <div className='Footer' id='Contact' data-aos="fade-up">
            <div className="title">
                Get In Touch
            </div>
            <div className="container mt-5" >
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4" id=''>
                        <div className="row">
                            <div className="col-4">
                                <div className='ContactIcons p-3'>
                                    <i class="fa-solid fa-phone"></i>
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
                    <div className="col-xs-12 col-sm-12 col-md-4" id=''>
                        <div className="row">
                            <div className="col-4">
                                <div className='ContactIcons p-3'>
                                    <i class="fa-regular fa-envelope"></i>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="Contact mt-3">
                                    Email
                                </div>
                                <div className="phoneNumber mt-4">
                                    jaberson98@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4" id=''>
                        <div className="row">
                            <div className="col-4">
                                <div className='ContactIcons p-3'>
                                    <i class="fa-solid fa-location-dot"></i>
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
                <div className="socialMediaLogos d-flex justify-content-start ">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-behance"></i>
                </div>
            </div>
            
        </div>
    )
}
