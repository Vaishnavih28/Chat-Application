import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"


const useLogin = () => {

    const [loading, setLoading]= useState(false)
    const {setAuthUser} = useAuthContext();
  

    const login = async (userName, password) =>{
        const success = handleErrors (userName, password)
        if(!success) return;

        setLoading(true)

        try {
            const res = await fetch("/api/auth/login" , {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({userName,password}) //When sending data to a web server, the data has to be a string.Convert a JavaScript object into a string with JSON.stringify()
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data)
            console.log(data)
            
            
        } catch (error) {
            toast.error(error.message)
           
            
        }finally{
            setLoading(false)
        }
    }

    return {loading,login}
}

export default useLogin

function handleErrors(userName, password){
    if(!userName || !password){
        toast.error("Please fill all the fields")
        return false
    }
    return true

}