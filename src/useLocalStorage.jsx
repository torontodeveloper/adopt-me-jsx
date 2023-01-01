import React,{useState} from 'react'

function getSavedValue(key,initialValue){
  const savedValue =  JSON.parse(localStorage.getItem(key))
  if(savedValue){
        return savedValue
  }
  if(initialValue instanceof Function){
    return initialValue()
  }
  return initialValue
}

function useLocalStorage(key,initialValue){
    const [value,setValue] = useState(initialValue)

    return getSavedValue(key,initialValue)
}
export default useLocalStorage