import React from 'react'
import "./Portfolio.scss"

export default function Portfolio() {
    return (
        <div className='Portfolio' id='Portfolio' data-aos="fade-up">
            <div className="title mb-4">
                Portfolio
            </div>
            <div className="row ">
                <div className="col-xs-12 col-sm-12 col-md-4" id='portfolioImg'>
                    <div className='portfolioImg'>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className='portfolioImg'>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className='portfolioImg'>

                    </div>
                </div>
            </div>
        </div>
    )
}
