import dynamic from "next/dynamic"
import React from 'react'
import { AiOutlineCompass, AiOutlineHome, AiOutlinePlusSquare, AiOutlineSend } from "react-icons/ai"
import { createRandomUser } from "../faker"

const Footer = ({ setShowCreatePost }: any) => {
   const user = createRandomUser()
   return (
      <footer className="bottom-0 sticky bg-gray1 text-gray5 flex justify-between p-4 border-t border-gray2 items-center">
         <AiOutlineHome className="w-1/5" size={30} />
         <AiOutlineCompass className="w-1/5" size={30} />
         <AiOutlinePlusSquare
            className="w-1/5"
            size={30}
            onClick={() => setShowCreatePost(true)}
         />
         <AiOutlineSend
            size={30}
            className="transform mb-2.5 w-1/5"
            style={{
               transform: "rotate(-30deg)"
            }}
         />
         <div className="w-1/5 flex items-center justify-center">
            <div className="flex flex-col p-0.5 rounded-full border-2 border-gray-500">
               <img
                  src={user.avatar}
                  alt={user.username}
                  className="rounded-full w-7"
               />
            </div>
         </div>
      </footer>
   )
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false })