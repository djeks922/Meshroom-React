import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerFirst">
                    <h5 data-aos="fade-up">Pages</h5>
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="30"><a href="#">Services</a></li>
                        <li data-aos="fade-up" data-aos-delay="50"><a href="#">Projects</a></li>
                        <li data-aos="fade-up" data-aos-delay="70"><a href="#">About</a></li>
                        <li data-aos="fade-up" data-aos-delay="90"><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footerSecond">
                    <h5 data-aos="fade-up">Services</h5>
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="30"><a href="#">Screen Printing</a></li>
                        <li data-aos="fade-up" data-aos-delay="50"><a href="#">Sublimation Printing</a></li>
                        <li data-aos="fade-up" data-aos-delay="70"><a href="#">Custom branded items</a></li>
                        <li data-aos="fade-up" data-aos-delay="90"><a href="#">Custom pos</a></li>
                        <li data-aos="fade-up"><a href="#">Custom signage</a></li>
                        <li data-aos="fade-up"><a href="#">Fashion Printing</a></li>
                        <li data-aos="fade-up"><a href="#">Emroidery</a></li>
                    </ul>
                </div>

                <div className="footerThird">
                    <h5 data-aos="fade-up">Contact details</h5>
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="30"><a href="#">hello@themeshroom.co.uk</a></li>
                        <li data-aos="fade-up" data-aos-delay="50"><a href="#">+44 7834 282061</a></li>
                        <li data-aos="fade-up" data-aos-delay="70">
                            <a href="#">5st Mary’s Row Moseley <br />
                                Birmingham B13 8HW</a>
                        </li>
                        <li className="footerIcons">
                            <a href="#">
                                <span data-aos="fade-up" data-aos-delay="30"><a href="#">FB</a></span>
                                <span data-aos="fade-up" data-aos-delay="50"><a href="#">IG</a></span>
                                <span data-aos="fade-up" data-aos-delay="70"><a href="#">TW</a></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
