import React from 'react'
import dats from '../../Data/dats.json'
import Blog from '../Blog';
import "./style.scss"

const Blogs = () => {
    return (
        <div className='maini'>
            <div className="headim">
                <h1>Recent Blogs</h1>
                <p>Get updates about our latest trends and techniques used in <br /> interior design project works.</p>
            </div>
            <div className="cars">
                {
                    dats.map((dat) => {
                        return <Blog dat={dat} />;
                    })
                }
            </div>
        </div>
    )
}

export default Blogs