import React from 'react'
import "./MySkills.scss"

export default function MySkills() {
    return (
        <div>
            <div className="mySkills " id='mySkills' data-aos="fade-up">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="title">
                            My Skills
                        </div>
                        <div className="EveryDay ">
                            <span className='border border-light'>
                                Every Day is a New Challenge
                            </span>
                        </div>
                        <div className="content mt-5">
                            I'm a UI/UX Designer based in Tamilnadu India, with a passion for designing beautiful
                            and functional user experiences. I'm passionate about improving the lives of others
                            through design and am constantly looking to learn new things everyday.

                            I'm a UI/UX Designer based in Tamilnadu India, with a passion for designing
                            beautiful and functional user experiences. I'm passionate about improving the
                            lives of others through design and am constantly looking to learn new things everyday.

                            <div className='mt-5'>
                                I'm a UI/UX Designer based in Tamilnadu India, with a passion for designing beautiful
                                and functional user experiences. I'm passionate about improving the lives of others through
                                design and am constantly looking to learn new things everyday.
                            </div>
                        </div>
                        <div className='ContactBtn mt-5'>
                            <button type="button" className='btn CVBtns text-uppercase' id='ContactBtns'>
                                <span>contact me</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="skillsLevel mt-5">
                            <div className="figma">
                                    <label for="customRange3" class="form-label">Figma</label>
                                    <div>
                                    <input type="range" class="form-ranges" min="0" max="100" value="85" id="customRange3"/>
                                    </div>
                                    <div className="selector">
                                        <div className="selectBtn"></div>
                                    </div>
                                    <div className='selectValue'></div>
                            </div>
                            <div className="adobeXd">
                                <span>
                                    Adobe Xd
                                </span>
                                <div>
                                    {/* <input type="range" /> */}
                                </div>
                            </div>
                            <div className="Photoshop">
                                <span>
                                    Photoshop
                                </span>
                                <div>
                                    {/* <input type="range" /> */}
                                </div>
                            </div>
                            <div className="Illustrator">
                                <span>
                                    Illustrator
                                </span>
                                <div>
                                    {/* <input type="range" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
