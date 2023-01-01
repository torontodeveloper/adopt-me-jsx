import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Node.css'

const Node = ({ item, hasChildren, level, onToggle, callback, selection }) => {
    const [isSelected, setIsSelected] = useState({
        id: item.name,
        status: false
    })
    function handleClick(name) {
        const obj = {
            id: name,
            status: !isSelected.status
        }
        setIsSelected(obj)
        callback(item.name)
    }
    useEffect(() => {
        if (selection && selection === item.name) {
            console.log('useEffect', selection, item.name)
            const obj = {
                id: item.name,
                status: true
            }
            setIsSelected(obj)
        } else {
            const obj = {
                id: item.name,
                status: false
            }
            setIsSelected(obj)
        }
    }, [selection])
    return (
        <div style={{ paddingLeft: `${level} *16px` }} className='container'>
            <h4 className={`${isSelected.status && 'selection'}`} onClick={() => handleClick(item.name)}>
                {item.name}
            </h4>
            <p>{item.status}</p>
            {hasChildren && <button onClick={onToggle}>++</button>}

        </div >
    )
}
export default Node