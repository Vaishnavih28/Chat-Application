import Conversation from "./Conversation.jsx"
import useGetConversations from "../../Hooks/useGetConversations.js"

const Conversations = () => {
  const { loading , conversations} = useGetConversations()
  console.log(conversations);


  return (
    <div className="py-2 flex flex-col overflow-auto">

      

      
      

      {conversations.map((conversation, idx)=>{
        return (
        <Conversation key={conversation._id}
        conversation={conversation}
        lastIdx = {idx ===conversations.length - 1} />

      )})}
      



      { loading ?  <span className="loading loading-spinner"></span> : null}
    </div>
  )
}

export default Conversations