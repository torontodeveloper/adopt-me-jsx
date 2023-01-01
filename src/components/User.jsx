import React from 'react'
import { useParams } from 'react-router-dom'

const User=()=>{
    const {name,slug} = useParams()
    console.log('match************88',name)
    return(
        <div>
            User*** {name}
        </div>
    )
}
export default User