//to get the sidebar conversatiions


import { useState, useEffect } from "react"
import toast from "react-hot-toast"


const useGetConversations = () => {
  const [loading, setloading] = useState(false)
  const[conversations, setConversations] = useState([])

  useEffect(()=>{

    const getConversations = async()=>{
      setloading(true)

      try {
        const res = await fetch("/api/users") //as it a get request not required to specify in options
        const data = await res.json();

        if(data.error){
          throw new Error(data.error)
        }

        setConversations(data)
        console.log(conversations)
        
      } catch (error) {
        toast.error(error.message)  
      } finally{
        setloading(false)
      }
    }

    getConversations()
  },[]) //empty dependency [] so it rerenders only once

  return { loading ,conversations }

  
}

export default useGetConversations