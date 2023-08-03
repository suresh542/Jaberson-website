import React from 'react'
import "./MySkills.scss"
import figmaImage from "../images/skills image/figma.png"
import XDImage from "../images/skills image/XD.png"
import PSImage from "../images/skills image/Photoshop.png"
import AIImage from "../images/skills image/AI.png"

export default function MySkills() {
    return (
        <div>
            <div className="mySkills mt-5" id='mySkills' data-aos="fade-up">
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
                        <div className="skillsLevel">
                            <div className="figma mb-5">
                                    <span class="form-label">Figma</span>
                                    <div>
                                        <img src={figmaImage} alt="" width={"100%"} />
                                    </div>
                            </div>
                            <div className="adobeXd mb-5">
                                <span>
                                    Adobe Xd
                                </span>
                                <div>
                                <img src={XDImage} alt=""  width={"100%"}/>
                                </div>
                            </div>
                            <div className="Photoshop mb-5">
                                <span>
                                    Photoshop
                                </span>
                                <div>
                                <img src={PSImage} alt="" width={"100%"} />
                                </div>
                            </div>
                            <div className="Illustrator">
                                <span>
                                    Illustrator
                                </span>
                                <div>
                                <img src={AIImage} alt="" width={"100%"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
