import React from 'react'
import "./style.scss"

const Call = () => {
    return (
        <div className='ana'>
            <div className="yazilare">
                <div className="real">
                    <h1>We Tackle The Most <br /> Challenging Designs</h1>
                    <p>The world needs innovators and problem solvers who <br /> turn challenges into greater opportunities. We have <br /> an insatiable curiosity about transformative trends <br /> challenging the status.</p>
                    <div className="call-us">
                        <img src="./Frame.svg" alt="" />
                        <div className="numbers">
                            <h1 className='babadilifun'>012345678</h1>
                            <p className='maybebutshebrokemyheart'>Call Us Anytime</p>
                        </div>
                    </div>
                    <button>Get Free Estimate <img src="./rarrow.svg" alt="" /></button>
                </div>
            </div>
            <div className="big-img">
                <img src="./kit.svg" alt="" />
            </div>
        </div>
    )
}

export default Call