import React from 'react'
import { AiOutlineBook, AiOutlineComment, AiOutlineHeart, AiOutlineSend } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"

const FeedItem = ({post}:any) => {
   return (
      <div className="flex flex-col border border-gray2 rounded my-3 shadow-md m-0.5">
         <header className="border-b border-gray-400 w-full flex items-center flex-shrink-0 p-4 text-gray5">
            <div className="border-2 border-gray3 p-0.5 rounded-full">
               <img
                  src={post.avatar}
                  className="rounded-full object-fill w-10 flex-shrink-0"
               />
            </div>
            <h2 className="text-sm font-semibold ml-2 gray5">{post.username}</h2>
            <BsThreeDots className="ml-auto" size={24} />
         </header>
         <div
            className="w-full relative"
            style={{
               paddingBottom: "125%"
            }}
         >
            <img
               className="h-full absolute object-cover"
               src={post.image}
            />
         </div>
         <div className="px-4 pt-4 pb-2 text-gray5 flex items-center">
            <AiOutlineHeart size={30}/>
            <AiOutlineComment size={30} className="mx-3"/>
            <AiOutlineSend 
               size={30} 
               className="transform mb-2.5"
               style={{
                  transform: "rotate(-30deg)"
               }}
            />
            <AiOutlineBook size={28} className="ml-auto" />
         </div>
      </div>
   )
}

export default FeedItem