import { useEffect } from 'react'
import { useState } from 'react'


function useLocalStorage(key, initialValue) {
    const [value, setHandle] = useState(initialValue)

    let item = localStorage.getItem(key) || initialValue
    useEffect(() => {
        localStorage.setItem(key, value)
    }, [key, value])
    return [value, setHandle]
}

export default useLocalStorage