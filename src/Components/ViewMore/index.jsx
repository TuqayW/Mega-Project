import React from 'react'
import './style.scss'
const ViewMore = ({data}) => {
    return (
        <div className='card'>
            <h1>{data.idea}</h1>
            <p>{data.text}</p>
            <button>View More <img src="./rarrow.svg" alt="" /> </button>
        </div>
    )
}

export default ViewMore