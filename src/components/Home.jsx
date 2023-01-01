import React,{ useEffect,useState } from 'react'

const Home=()=>{
    const [response,setResponse] = useState([])
    async function fetchAPI(){
        console.log('making fetch API call')
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await resp.json()
        console.log(data)
        setResponse(data)
    }
    useEffect(()=>{
        fetchAPI()
    },[])
    return(
        <div className="text-format">
            Home***
            {
                response?.map((data,index)=>(
                    <div key={index}>
                    <li>{data?.id}- {data?.title}</li>
                    </div>
                ))
            }
        </div>
    )
}
export default Home