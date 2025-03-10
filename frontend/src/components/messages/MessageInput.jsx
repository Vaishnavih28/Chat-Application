import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../Hooks/useSendMessage";


const MessageInput = () => {

  const [message , setMessage] = useState("")
 

  const { sendMessage , loading} = useSendMessage()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!message) return
    console.log("calling sendmessage")
    await sendMessage(message)
    
    setMessage("")
   



  }



  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-white border-white
             text-black" placeholder="send a message" 
             value={message}
             onChange={(e)=> {
              setMessage(e.target.value)
            }}
             
             >
            </input>
            
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3" >
            { loading ?  <span className="loading loading-spinner"></span> : <BsSend /> }
            </button>

        </div>

    </form>
  )
}

export default MessageInput