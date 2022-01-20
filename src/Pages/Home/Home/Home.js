import React from 'react';
import Footer from '../../Footer/Footer/Footer';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div >
            <div className='home'>
                <div className='home-container'>
                    <img className='home-image'
                        src="https://m.media-amazon.com/images/I/61D9533FtUL._SX1500_.jpg" alt=""
                    />
                    <div className='home_row'>
                        <Product
                            id="235665442"
                            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                            price={29.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        />
                        <Product
                            id="235665443"
                            title="Startup Law and Fundraising for Entrepreneurs and Startup Advisors"
                            price={39.95}
                            image="https://images-na.ssl-images-amazon.com/images/I/516SYJ0dspL._SX348_BO1,204,203,200_.jpg"

                        />

                    </div>
                    <div className='home_row'>
                        <Product
                            id="235665444"
                            title="CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home (GXiVR8060A11)"
                            price={1220.14}
                            image="https://m.media-amazon.com/images/I/81Wx7hw9vwL._AC_UL800_FMwebp_QL65_.jpg"
                        />
                        <Product
                            id="235665445"
                            title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold"
                            price={5067.14}
                            image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY545_FMwebp_QL65_.jpg"
                        />
                        <Product
                            id="235665446"
                            title="2021 HP 14 inch TouchScreen HD Laptop, Intel Celeron N4020, 4GB DDR4, 64GB eMMC, 1 Year Microsoft 365 Personal, Webcam, HDMI, Windows 10 S /Legendary Accessories (Google Classroom or Zoom) (Rose Pink)"
                            price={429}
                            image="https://m.media-amazon.com/images/I/617kQvh09RS._AC_UY545_FMwebp_QL65_.jpg"
                        />

                    </div>
                    <div className='home_row'>
                        <Product
                            id="235665442"
                            title="Samsung 65-inch TU-7000 Series Class Smart TV | Crystal UHD - 4K HDR - with Alexa Built-in | UN65TU7000FXZA, 2020 Model"
                            price={3400.56}
                            image="https://m.media-amazon.com/images/I/71qqCWuXuYL._AC_UY545_FMwebp_QL65_.jpg"
                        />
                        <Product
                            id="235665442"
                            title="Samsung 65-inch TU-7000 Series Class Smart TV | Crystal UHD - 4K HDR - with Alexa Built-in | UN65TU7000FXZA, 2020 Model"
                            price={3400.56}
                            image="https://m.media-amazon.com/images/I/71qqCWuXuYL._AC_UY545_FMwebp_QL65_.jpg"
                        />
                        <Product
                            id="235665442"
                            title="Samsung 65-inch TU-7000 Series Class Smart TV | Crystal UHD - 4K HDR - with Alexa Built-in | UN65TU7000FXZA, 2020 Model"
                            price={3400.56}
                            image="https://m.media-amazon.com/images/I/71qqCWuXuYL._AC_UY545_FMwebp_QL65_.jpg"
                        />
                        <Product
                            id="235665442"
                            title="Samsung 65-inch TU-7000 Series Class Smart TV | Crystal UHD - 4K HDR - with Alexa Built-in | UN65TU7000FXZA, 2020 Model"
                            price={3400.56}
                            image="https://m.media-amazon.com/images/I/71qqCWuXuYL._AC_UY545_FMwebp_QL65_.jpg"
                        />
                    </div>
                    <div className='home_row'>
                        <Product
                            title="Robot Vacuum Cleaner - CLOBOT Auto Robotic Vacuum with 2000Pa Powerful Suctions, 120min Runtime, Self-Charging, Ultra Thin, Quiet, Works with Alexa/Google/App, for Pet Hairs, Hard Floors, Carpets"
                            price={5233.77}
                            image="https://images-na.ssl-images-amazon.com/images/I/41ZeHzq+80L._SX320_QL100_AC_SCLZZZZZZZ_.jpg"
                        />
                        <Product
                            title="Robot Vacuum Cleaner - CLOBOT Auto Robotic Vacuum with 2000Pa Powerful Suctions, 120min Runtime, Self-Charging, Ultra Thin, Quiet, Works with Alexa/Google/App, for Pet Hairs, Hard Floors, Carpets"
                            price={5233.77}
                            image="https://images-na.ssl-images-amazon.com/images/I/41ZeHzq+80L._SX320_QL100_AC_SCLZZZZZZZ_.jpg"
                        />
                        <Product
                            title="Robot Vacuum Cleaner - CLOBOT Auto Robotic Vacuum with 2000Pa Powerful Suctions, 120min Runtime, Self-Charging, Ultra Thin, Quiet, Works with Alexa/Google/App, for Pet Hairs, Hard Floors, Carpets"
                            price={5233.77}
                            image="https://images-na.ssl-images-amazon.com/images/I/41ZeHzq+80L._SX320_QL100_AC_SCLZZZZZZZ_.jpg"
                        />
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );

};

export default Home;