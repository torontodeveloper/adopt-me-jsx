import React from 'react'
import {useLocation,useHistory,b} from 'react-router-dom'

const About=()=>{
    const location = useLocation()
    const history = useHistory()
    console.log('location',history)
    function buttonHandler(){
        console.log('I am in About Page, clicked')
        history.push('/')
    }
    return(
        <div>
            About***
            <button onClick={()=>buttonHandler()}>Go Back</button>
        </div>
    )
}
export default About