import React from 'react'
import "./MySkills.scss"
import Skills from "../images/Skills.png"

export default function MySkills() {
    return (
        <div>
            <div className="mySkills" id='mySkills' data-aos="fade-up">
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
                            In my toolkit, you'll find a blend of expertise. I dive into user research, uncovering insights 
                            that shape design decisions. Wireframing allows me to create clear blueprints for seamless 
                            interactions. Visual design and typography are my canvas for creating visually appealing and 
                            cohesive interfaces with a background in graphic design, I add a touch of artistry to every project.
                             Interaction design is seamless flows and transitions that guide users effortlessly through their journey.
                           <br /> <br />I wield a range of powerful tools to bring my designs to life. 
                           Figma and Adobe XD are my go-to platforms for wireframing and prototyping, 
                           while Illustrator and Photoshop enable me to refine visual elements with finesse.
                            By merging design theory with practical tools, I create interfaces that not only 
                            meet users' needs but also exceed their expectations.
                           <br /><br /> Let's collaborate to transform your ideas into stunning, user-friendly designs!
                            
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 d-flex justify-content-center">
                        <div className="skillsLevel">
                            <img src={Skills} alt="" width={"100%"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
