import React from 'react'
import "./Header.scss"
import MainLogo from "../images/MainLogo.png"

export default function Header() {
    return (
        <div className='mainHeader container-flex ps-5 pe-5'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
                <div class="container-fluid">
                    <a class="navbar-brand" href="Home">
                        <img src={MainLogo} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-lg-0 d-flex">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="About">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
