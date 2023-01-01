import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Branch from './Branch'

const Tree = ({ data, isOffline }) => {
    const [selection, setSelection] = useState('')
    function callback(name) {
        console.log("Tree", name)
        setSelection(name)
    }
    console.log('Tree', data)
    return (
        <div>
            {
                data.map(item => (
                    <Branch key={item.id} item={item} level={0} callback={(name) => callback(name)} selection={selection} isOffline={isOffline} />
                ))
            }
        </div>
    )
}

export default Tree