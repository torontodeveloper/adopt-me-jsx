import React from 'react'
import { useEffect } from 'react'
import jsonData from './data.json'

const App = () => {
    useEffect(() => {
        const list = getFilteredDevices(jsonData[0].network.connectedDevices)
        console.log('list', list)
    }, [])
    let devicesFiltered = []
    function getFilteredDevices(list) {
        list.forEach(function (device) {
            if (device.connectedDevices.length > 0) {
                getFilteredDevices(device.connectedDevices)
            }
            if (device.status === 'offline') {
                devicesFiltered.push(device)
            }
        })
        return devicesFiltered
    }
    return (
        <div className='semantic ui'>
            <h1>Learning Redux </h1>
        </div>
    )
}


export default App