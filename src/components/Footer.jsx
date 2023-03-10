import React from 'react'
import '../styles/footer.scss'
import iconTelegram from '../assets/images/icon/telegram-icon.svg'
import iconInstagram from '../assets/images/icon/instagram-icon.svg'
import iconFacebook from '../assets/images/icon/facebook-icon.svg'

function Footer() {
  return (
    <footer class="footer">
        <div class="box-list-footer d-flex justify-content-between">
            <div className="paddingfoot">
                <ul class="title-footer-list">
                    <li class="title-footer-title">Copyright 2020</li>
                    <li class="title-footer-text">Nullam laoreet nec turpis et ultrices. Duis sit <br/> amet quam arcu. Nam facilisis lacinia ex, eget <br/> sollicitudin massa pellentesque in. Vivamus <br/> mattis eros at sem pulvinar tincidunt.</li>
                </ul>
                <ul class="web-page-footer">
                    <li class="title-web-page">
                        Sayt sahifalari
                    </li>
                    <li class="web-page-list">
                        <a href="#" class="web-link-small">Bosh sahifa</a> 
                    </li>
                    <li class="web-page-list">
                        <a href="#" class="web-link-small">Xizmatlar</a>
                    </li>
                    <li class="web-page-list">
                        <a href="#" class="web-link-small">Portfolio</a>
                    </li>
                    <li class="web-page-list">
                        <a href="#" class="web-link-small">Jamoa</a>
                    </li>
                    <li class="web-page-list">
                        <a href="#" class="web-link-small">Blog</a>
                    </li>
                    <li class="web-page-list">
                        <a href="#" class="web-link-small">Kontaktlar</a>
                    </li>
                </ul>
                <ul class="footer-link-list">
                    <li class="footer-list-link large-title">
                        Biz internetda
                    </li>
                    <li class="footer-list-link">
                        <a href="#telegram.ru" class="link-local-footer">
                            <img src={iconTelegram} alt="Telegram icon" class="local-images-icon" width="22" height="23" /> 
                            <span class="telegram-link">
                                Telegram
                            </span>     
                        </a>
                    </li>
                    <li class="footer-list-link">
                        <a href="#telegram.ru" class="link-local-footer">
                            <img src={iconFacebook} alt="facebook icon" class="local-images-icon" width="22" height="23" /> 
                            <span class="telegram-link">
                                Facebook
                            </span>     
                        </a>
                    </li>
                    <li class="footer-list-link">
                        <a href="#telegram.ru" class="link-local-footer">
                            <img src={iconInstagram} alt="facebook icon" class="local-images-icon" width="22" height="23" /> 
                            <span class="telegram-link">
                                Instagram
                            </span>     
                        </a>
                    </li>
                </ul>
            </div>
        </div>   
    </footer>
  )
}

export default Footer
