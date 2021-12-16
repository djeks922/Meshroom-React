import React from 'react'
import inputbg from '../../assets/img/inputbg.webp'
import DashedLine from '../../assets/img/dashed-line.svg'
import BottomImg from '../../assets/img/lennert-naessens-EgB66PkGZbQ-unsplash.webp'

function JoinOurLeft() {
    return (
        <div className='joinLeft'>
            <div className="joinLeftHeading">
                <h2>Join to our</h2>
            </div>

            <div className="joinLeftForm">
                <form>

                    <label>
                        <p>name</p>
                        <img className='inputbg' src={inputbg} alt="" />
                        <input type="text" />
                    </label>

                    <label>
                        <p>email</p>
                        <img className='inputbg' src={inputbg} alt="" />
                        <input type="email" />
                    </label>

                    <div className="mainButtonBack joinButton">
                        <button type='submit' className="mainButton">
                            <div className="mainButtonInside">
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <p className="btn-label-p jointext">Join</p>
                            </div>
                        </button>
                    </div>

                </form>
            </div>

            <div className='joinLeftDashedLine'>
                <img src={DashedLine} alt="" />
            </div>
        </div>
    )
}

export default JoinOurLeft
