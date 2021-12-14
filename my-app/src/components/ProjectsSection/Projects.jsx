import React from 'react'
import './Projects.css'

import Car from '../../assets/img/car.jpg'
import Hospital from "../../assets/img/hospital.jpg"
import Movie from "../../assets/img/movie.jpg"
import Book from "../../assets/img/book.jpg"
import Hover from "../../assets/img/hover.png"
import Katya from "../../assets/img/katya-austin-koyy-5uzlPU-unsplash@2x.jpg"

function Projects() {
    return (
        <section className="ftprojects">
            <div data-aos="fade-up-right" className="ftprojects__header">
                <h1>Some of our <br />
                    featured projects</h1>
            </div>
            <div className="ftprojects__container">
                <div className="ftprojects__proje">
                    <img data-aos="zoom-in" src={Car} />
                    <div className="ftprojects_proje_footerImg">
                        <img src={Hover} />
                        <p>Vehicle liveries</p>
                    </div>
                </div>
                <div className="ftprojects__proje">
                    <img data-aos="zoom-in" id="hospital" src={Hospital} />
                    <div className="ftprojects_proje_footerImg">
                        <img src={Hover} />
                        <p className="signs">Signs</p>
                    </div>
                </div>
                <div className="ftprojects__proje">
                    <img data-aos="zoom-in" src={Movie} />
                    <div className="ftprojects_proje_footerImg">
                        <img src={Hover} />
                        <p>Posters & Canvases</p>
                    </div>
                </div>
                <div className="ftprojects__proje">
                    <img data-aos="zoom-in" src={Book} />
                    <div className="ftprojects_proje_footerImg">
                        <img src={Hover} />
                        <p>Stationary Printing</p>
                    </div>
                </div>
            </div>
            <div className="seeAll">
                <button className="seeAllBtn" type='submit'>
                    <div className="seeAllInside">
                        <span className="btn-paint-s"></span>
                        <span className="btn-paint-s"></span>
                        <span className="btn-paint-s"></span>
                        <span className="btn-paint-s"></span>
                        <span className="btn-paint-s"></span>
                        <span className="btn-label-s">See All</span>
                    </div>
                </button>
            </div>
            <div data-aos="fade-left" className="we-love-print">
                <img src={Katya} />
            </div>
        </section>
    )
}

export default Projects
