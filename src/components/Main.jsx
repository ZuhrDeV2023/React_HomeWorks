import React from 'react'
import '../styles/main.scss'

// Components
import webIllustration from '../assets/images/svg-icon-img/website-illustration.svg'
import botIllustration from '../assets/images/svg-icon-img/bot-illustration.svg'
import crmIllustration from '../assets/images/svg-icon-img/crm-illustration.svg'
import smmIllustration from '../assets/images/svg-icon-img/smm-illustration.svg'
import designIllustration from '../assets/images/svg-icon-img/design-illustration.svg'


function Main() {
  return (
    <main className='main'>
        <section class="top-main-box">
            <div class="top-main-item">
                <h2 class="top-main-title">Xizmatlar</h2>
                <p className="top-main-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci nec neque finibus mattis. Vivamus in sem 
                    <br />rhoncus, bibendum sapien in, placerat mi. Praesent tempus faucibus risus in imperdiet. Integer elementum justo sit <br />amet odio tincidunt, a pellentesque massa condimentum.
                </p>
            </div>
        </section>
        <section class="down-main">
            <div class="down-main-item">
                <ul class="down-item-list">
                    <li class="down-list-item">
                        <img src={webIllustration} alt="crm image" class="down-list-images" width="200" height="154" />
                        <div class="down-list-box">
                            <h2 class="list-box-title">Sayt tuzish</h2>
                            <p class="list-box-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci nec neque finibus mattis
                            </p>
                            <ul class="before-item-list">
                                <li class="before-list-item">lending</li>
                                <li class="before-list-item">vizitka</li>
                                <li class="before-list-item">korporativ</li>
                                <li class="before-list-item">internet do’kon</li>
                                <li class="before-list-item">maxsus</li>
                            </ul>
                            <div class="box-buttom-main">
                                <a href="#" class="link-order">Buyurtma berish</a>
                                <a href="#" class="link-all-info">Batafsil ma’lumot</a>
                            </div>
                        </div>
                    </li>
                    <li class="down-list-item">
                        <img src={botIllustration} alt="crm image" class="down-list-images" width="200" height="154" />
                        <div class="down-list-box">
                            <h2 class="list-box-title">Telegram bot tuzish</h2>
                            <p class="list-box-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci nec neque finibus mattis
                            </p>
                            <ul class="before-item-list">
                                <li class="before-list-item">kontakt bot</li>
                                <li class="before-list-item">ballar yig’ish</li>
                                <li class="before-list-item">yetkazib berish</li>
                                <li class="before-list-item">Telegram oldi-sotdi</li>
                                <li class="before-list-item">ovoz bilan ishlash</li>
                                <li class="before-list-item">maxsus</li>
                            </ul>
                            <div class="box-buttom-main">
                                <a href="#" class="link-order">Buyurtma berish</a>
                                <a href="#" class="link-all-info">Batafsil ma’lumot</a>
                            </div>
                        </div>
                    </li>
                    <li class="down-list-item">
                        <img src={smmIllustration} alt="crm image" class="down-list-images" width="200" height="154" />
                        <div class="down-list-box">
                            <h2 class="list-box-title">SMM</h2>
                            <p class="list-box-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci nec neque finibus mattis
                            </p>
                            <ul class="before-item-list">
                                <li class="before-list-item">Facebook</li>
                                <li class="before-list-item">Instagram</li>
                                <li class="before-list-item">TikTok</li>
                                <li class="before-list-item">reklamalarni sozlash</li>
                                <li class="before-list-item">aksiyalar uyushtirish</li>
                            </ul>
                            <div class="box-buttom-main">
                                <a href="#" class="link-order">Buyurtma berish</a>
                                <a href="#" class="link-all-info">Batafsil ma’lumot</a>
                            </div>
                        </div>
                    </li>
                    <li class="down-list-item">
                        <img src={designIllustration} alt="crm image" class="down-list-images" width="200" height="154" />
                        <div class="down-list-box">
                            <h2 class="list-box-title">Grafik dizayn</h2>
                            <p class="list-box-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci nec neque finibus mattis
                            </p>
                            <ul class="before-item-list">
                                <li class="before-list-item">logotip</li>
                                <li class="before-list-item">korporativ stil</li>
                                <li class="before-list-item">brending</li>
                                <li class="before-list-item">ijtimoiy tarmoq sahifalari uchun posterlar</li>
                            </ul>
                            <div class="box-buttom-main">
                                <a href="#" class="link-order">Buyurtma berish</a>
                                <a href="#" class="link-all-info">Batafsil ma’lumot</a>
                            </div>
                        </div>
                    </li>
                    <li class="down-list-item">
                        <img src={crmIllustration} alt="crm image" class="down-list-images" width="200" height="154" />
                        <div class="down-list-box">
                            <h2 class="list-box-title">CRM tizimlar</h2>
                            <p class="list-box-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci nec neque finibus mattis
                            </p>
                            <ul class="before-item-list">
                                <li class="before-list-item">do’konlar va omborlar</li>
                                <li class="before-list-item">oshxona, kafe va restoranlar</li>
                                <li class="before-list-item">shaxsiy hisob-kitoblar</li>
                                <li class="before-list-item">maxsus</li>
                            </ul>
                            <div class="box-buttom-main">
                                <a href="#" class="link-order">Buyurtma berish</a>
                                <a href="#" class="link-all-info">Batafsil ma’lumot</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main >
  )
}

export default Main
