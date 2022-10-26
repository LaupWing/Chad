import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineHeart } from "react-icons/ai"

const Home: NextPage = () => {
   return (
      <div className="flex w-full">
         <header className="flex items-center justify-between w-full px-2">
            <div className="h-16 w-14 relative">
               <Image 
                  src="/logo.png" 
                  layout="fill"
                  objectFit="contain"   
               />
            </div>
            <div className="bg-gray-200 rounded mx-2 flex-1">
               <input 
                  type="text" 
                  className="bg-transparent w-full p-2"
                  placeholder="Search for"
               />
            </div>
            <AiOutlineHeart size={30}/>
         </header>
      </div>
   )
}

export default Home
