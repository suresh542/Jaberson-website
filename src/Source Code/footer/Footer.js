import React from 'react'
import "./Footer.scss"

export default function Footer() {
    return (
        <div className='Footer'>
            <div className="title">
                Get In Touch
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4" id=''>
                        <div className="row">
                            <div className="col-6">
                                <div className='ContactIcons p-3'>
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                            </div>
                            <div className="col-6"></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4" id=''>
                        <div className=''>

                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4" id=''>
                        <div className=''>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
