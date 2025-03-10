import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation"
import { extractTime } from "../../utils/extractTime"




const Message = ({message}) => {

  console.log("messages from messagejsx")
  
  

  const { authUser} = useAuthContext()
  const { selectedConversation } = useConversation()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? "chat-end" : "chat-start" ;
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = !fromMe ? "bg-white text-black" : "bg-blue-500 text-white";
  const formattedTime = extractTime(message.createdAt)
  const shakeClass = message.shouldShake ? "shake" : ""



  return (
    <div className={`chat ${chatClassName} ${shakeClass}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img
                  alt="Tailwind CSS chat bubble component"
                  src={profilePic} />

            </div>

        </div>
        <div className={`chat-bubble ${bubbleBgColor} pb-2`}>{message.message}</div>
        <div className=" chat chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-100" >{formattedTime}</div>

    </div>
  )
}

export default Message