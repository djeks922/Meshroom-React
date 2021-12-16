import React from 'react'
import Katya from '../../assets/img/katya-austin-koyy-5uzlPU-unsplash@2x.webp'
import Rainbow from '../../assets/img/mika-baumeister-PtabTe6iJ_8-unsplash.webp'

function JoinOurRight() {
    return (
        <div className='joinRight'>

            <div className="joinRightTop">
                <img src={Katya} alt="" />
            </div>

            <div className="joinRightMiddle">
                <article>
                    <p>
                        We are a
                        creative
                        community that
                        design, share,
                        and inspire
                        others. Join us
                        and let's grow
                        together
                    </p>
                </article>
            </div>

            <div className="joinRightBottom">
                <img src={Rainbow} alt="" />
            </div>

            <div className="joinRightEnd">
                <h3>
                    creative
                    community
                </h3>
            </div>

        </div>
    )
}

export default JoinOurRight
