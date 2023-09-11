import React from 'react'
import "./Portfolio.scss"
import websiteP from "../resume/LM10 Website--Case-study.pptx"
import mobileP from "../resume/Google UX Design Certificate - Lee Mobiles - Case study.pptx"

export default function Portfolio() {
    return (
        <div className='Portfolio' id='Portfolio' data-aos="fade-up">
            <div className="title mb-4">
                Portfolio
            </div>
            <div className="row ">
                <div className="col-xs-12 col-sm-12 col-md-6" id='portfolioImg'>
                    <a href={websiteP} className='text-decoration-none'>
                    <div className='portfolioImg'>
                        <span >  Responsive
                            Website Design</span>
                    </div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <div className='portfolioImg'>
                        <span><a href={mobileP}> Mobile Sales
                            App Design</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
