import React from 'react'
import "./style.scss"

const Interno = ({ message }) => {
    return (
        <div className='card'>
            <div className="yuxari">
                <img src={message.img} alt="" />
                <div className="addres">
                    <h1>{message.name}</h1>
                    <p>{message.country}</p>
                </div>
            </div>
            <div className="asagi">
                <h1>{message.mes}</h1>
            </div>
        </div>
    )
}

export default Interno