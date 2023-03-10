import React from 'react'
import imgLogo from '../assets/images/logo/pixer-logo.svg'

import '../styles/header.scss'

function Navbar() {
  return (
    <header class="header">
        <div class="header-inner">
            <a href="#" class="logo-link">
                <img alt="logo img" width="58" height="20" class="logo-images" src={imgLogo} />
            </a>
            <nav class="navbar-item">
                <ul class="header-item-list">
                    <li class="header-list-item">
                        <a href="#" class="header-list-link">Bosh sahifa</a>
                    </li>
                    <li class="header-list-item">
                        <a href="#" class="header-list-link">Xizmatlar</a>
                        <ul class="dropdown-item-list">
                            <li class="dropdown-list-item">
                            <a href="" class="dropdown-list-link">Vebsayt</a>
                            <ul class="sub-dropdown-item-list">
                                <li class="sub-dropdown-list-item">
                                    Hello
                                </li>
                                <li class="sub-dropdown-list-item">
                                    god bye
                                </li>
                                <li class="sub-dropdown-list-item">
                                    god evning
                                </li>
                                <li class="sub-dropdown-list-item">
                                    dslmskd;vms                                  
                                </li>
                            </ul>
                            </li>
                            <li class="dropdown-list-item">    
                                <a href="#" class="dropdown-list-link ">Telegram bot</a>
                            </li>
                            <li class="dropdown-list-item">
                            <a href="#" class="dropdown-list-link">SMM</a>
                            </li>
                            <li class="dropdown-list-item">
                            <a href="#" class="dropdown-list-link">Grafik dizayn</a>
                            </li>
                            <li class="dropdown-list-item">
                            <a href="#" class="dropdown-list-link">CRM tizim</a>
                            </li>
                        </ul>
                    </li>
                    <li class="header-list-item">
                        <a href="#" class="header-list-link">Portfolio</a>
                    </li>
                    <li class="header-list-item">
                        <a href="#" class="header-list-link">Jamoa</a>
                    </li>
                    <li class="header-list-item">
                        <a href="#" class="header-list-link">Blog</a>
                    </li>
                    <li class="header-list-item">
                        <a href="#" class="header-list-link">Kontaktlar</a>
                    </li>
                </ul>
                <a href="tel:998909213711" class="tel-number">+998 90 921 37 11</a>
            </nav>
    </div>
</header>

  )
}

export default Navbar
