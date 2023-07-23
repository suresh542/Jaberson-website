import React from 'react'
import "./Portfolio.scss"

export default function Portfolio() {
    return (
        <div className='Portfolio'>
            <div className="title">
                Portfolio
            </div>
            <div className="row mt-5">
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
