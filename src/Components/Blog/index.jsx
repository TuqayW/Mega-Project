import React from 'react'
import "./style.scss"

const Blog = ({dat}) => {
  return (
    <div className='car'>
        <div className="upis">
            <img src={dat.img} alt="" />
            <h1>{dat.sort}</h1>
        </div>
        <div className="donis">
            <h1>{dat.about}</h1>
            <div className="altis">
                <h1>{dat.date}</h1>
                <img src="./circle.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Blog