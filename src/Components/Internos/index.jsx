import React from 'react'
import "./style.scss"
import messages from "../../Data/mes.json"
import Interno from '../Interno'

const Internos = () => {
    return (
        <div className='love-song'>
            <div className="maimi">
                <div className="upper">
                    <h1>What the People Thinks <br /> About Interno</h1>
                </div>
                <div className="down">
                    {
                        messages.map((message) => {
                            return <Interno message={message} />;
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Internos