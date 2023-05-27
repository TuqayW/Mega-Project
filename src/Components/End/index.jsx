import React from 'react'
import "./style.scss"

const End = () => {
  return (
    <div className='end'>
        <div className="part-1">
            <h1><img src="./Vector.svg" alt="" />Interno</h1>
            <p>We are the leading architect and interior design firm in the world.</p>
            <img src="./social.svg" alt="" />
        </div>
        <div className="part-2">
            <h1>Pages</h1>
            <p>Style Guide</p>
            <p>Protected</p>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>404</p>
        </div>
        <div className="part-2">
            <h1>Explore</h1>
            <p>About Us</p>
            <p>Recent Blog</p>
            <p>Pricing Plan</p>
            <p>Our Projects</p>
            <p>Contact Us</p>
        </div>
        <div className="part-4">
            <h1>Contact</h1>
            <p>53, East Birchwood Ave. <br /> Brooklyn, New York 11201, USA.</p>
            <p>contact@interno.com</p>
            <p>(123) 456 - 7890</p>
        </div>
    </div>
  )
}

export default End