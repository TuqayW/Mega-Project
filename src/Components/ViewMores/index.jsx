import React from 'react'
import datas from '../../Data/data.json'
import ViewMore from '../ViewMore'
import "./style.scss"

const ViewMores = () => {
    return (
        <div className='cards'>
            {
                datas.map((data) => {
                    return <ViewMore data={data} />;
                })
            }
        </div>
    )
}

export default ViewMores