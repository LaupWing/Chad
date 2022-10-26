import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
   return (
      <header className="flex items-center justify-between w-full px-2">
         <div className="h-16 w-14 relative">
            <Image 
               src="/logo.png" 
               layout="fill"
               objectFit="contain"   
            />
         </div>
         <div className="bg-gray2 text-gray3 flex items-center rounded mx-2 flex-1">
            <AiOutlineSearch 
               size={26}
               className="ml-2 text-gray3"
            />
            <input 
               type="text" 
               className="bg-transparent text-gray5 w-full p-2 focus:outline-none placeholder:text-gray3"
               placeholder="Search for"
            />
         </div>
         <AiOutlineHeart 
            size={30}
            className="text-gray3"
         />
      </header>
   )
}

export default Header