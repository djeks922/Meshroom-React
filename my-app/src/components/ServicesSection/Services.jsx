import React from 'react'
import './Services.css'
import Brush from '../../assets/img/Group_741_2x-transparent-brush.png'
import ServicesWord from '../../assets/img/Services_2x-transparent-services.png'
import ThirdImage from '../../assets/img/Group_771_2x-transparent.png'

function Services() {
    return (
        <section className="services">
            <img src={Brush} className="services__bg-center" />
            <img src={ServicesWord} className="services__bg-upper" />
            <div className="services__wrapper">
                <div data-aos="fade-right" className="services__upper-text">
                    <h1 data-aos="fade-right">Does your brand need unique print services?</h1>
                    <h3 data-aos="fade-right" data-aos-delay="100">With our services, we can help your brand achieve their goals
                    </h3>
                </div>
                <div className="services__middle">
                    <div data-aos="fade-right" className="services__img">
                        <img src={ThirdImage} />
                    </div>
                    <div className="services__options">
                        <ul className="sevices__options-bulletList">
                            <li data-aos="fade-left" className="services__options-bulletList-items">Textile</li>
                            <li data-aos="fade-left" className="services__options-bulletList-items">
                                Sublimation printing
                            </li>
                            <li data-aos="fade-left" className="services__options-bulletList-items">
                                Custom branded items
                            </li>
                            <li className="services__options-bulletList-items">Custom pos</li>
                            <li className="services__options-bulletList-items">
                                Fashion printing
                            </li>
                            <li data-aos="fade-left" className="services__options-bulletList-items">Embroidery</li>
                        </ul>
                    </div>
                </div>
                <div className="services__footer-text">
                    <div className="services__footer-text--rotated">
                        <span className="text-rotated">Mission</span>
                    </div>
                    <p data-aos="fade-right">
                        Our mission is to embrace the skills of our talented workforce to
                        provide a high level of service designed to fulfil the requirements
                        of our customers to our exacting standards, to their complete
                        satisfaction,within timescales and budget levels.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
