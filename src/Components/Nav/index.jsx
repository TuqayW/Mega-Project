import React from 'react'
import './style.scss'

const Nav = () => {
    return (
        <nav>
            <div className="left">
                <div className="real">
                    <img src="./Vector.svg" alt="" />
                    <h1>Interno</h1>
                </div>
            </div>
            <div className="right">
                <ul>
                    <li className='dif'>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Pages</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav