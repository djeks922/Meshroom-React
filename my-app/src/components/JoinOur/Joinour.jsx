import React from 'react'

import './Joinour.css'

import TopImage from '../../assets/img/geraldine-lewa-3fWE0Dp_aj8-unsplash.jpg'

import JoinOurLeft from './JoinOurLeft'
import JoinOurRight from './JoinOurRight'

function Joinour() {
    return (
        <section className='joinOur'>
            <div className='joinOurTop'>
                <img src={TopImage} alt="" />
            </div>

            <div className="joinOurContainer">
                <JoinOurLeft />
                <JoinOurRight />
            </div>
        </section>
    )
}

export default Joinour
