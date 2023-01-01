import React from 'react'
import { useState } from 'react'
import Node from './Node'

const Branch = ({ item, level, callback, selection, isOffline }) => {
    const [selected, setSelected] = useState(item.selected ?? false)
    const hasChildren = item.connectedDevices && item.connectedDevices.length !== 0

    const renderBranches = () => {
        if (hasChildren) {
            const newLevel = level + 1
            // debugger
            const list = isOffline && level !== 0 ? item.connectedDevices.filter(itemNode => itemNode.status === 'offline') : item.connectedDevices
            return list.map(child => (
                <Branch key={child.id} item={child} level={newLevel} callback={callback} selection={selection} isOffline={isOffline} />
            ))
        }
        return null
    }
    function toggleSelected() {
        setSelected(prev => !prev)
    }
    return (
        <div>
            <Node item={item} callback={callback} selected={selected} hasChildren={hasChildren} level={level} onToggle={toggleSelected} selection={selection} />
            {selected && renderBranches()}
        </div >
    )
}
export default Branch