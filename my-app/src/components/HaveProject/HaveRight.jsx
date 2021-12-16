import React from 'react'
import museum from '../../assets/img/birmingham-museums-trust-e0wBK0xJXYQ-unsplash.jpg'
import emarts from '../../assets/img/emarts-emarts-ZCTh4f4mv18-unsplash.jpg'

function HaveRight() {
    return (
        <div className='haveRight'>
            <div className="haveRightTop">
                <img src={museum} alt="" />
            </div>
            <div className="haveRightBottom">
                <img src={emarts} alt="" />
            </div>
        </div>
    )
}

export default HaveRight
