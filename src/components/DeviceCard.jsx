import React from 'react'
import './DeviceCard.css'

const DeviceCard = ({ name, type, id, isChildPresent, callbackHandler }) => {
    return (
        <div className='container'>
            <div className='card'>
                <h2>{id}</h2>
                <h2>{name}</h2>
                <p>{type}</p>
            </div>
            {isChildPresent && <button onClick={() => callbackHandler(name, type, id)}>++</button>}
        </div>
    )
}
export default DeviceCard