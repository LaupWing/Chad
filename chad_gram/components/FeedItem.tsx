import React from 'react'
import { BsThreeDots } from "react-icons/bs"

const FeedItem = ({post}:any) => {
   return (
      <div className="flex flex-col">
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
      </div>
   )
}

export default FeedItem