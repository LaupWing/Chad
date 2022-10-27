import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Profile from "../components/Profile"
import { createRandomPost, createRandomUser } from "../faker"
import { BsThreeDots } from "react-icons/bs"

const Home: NextPage = () => {
   const [users, setUsers] = useState<any>([])
   const [post, setPost] = useState<any>(null)

   useEffect(()=>{
      setUsers([...new Array(2)].map(_=>createRandomUser()))
      setPost(createRandomPost())
   },[])

   
   return (
      <div className="flex w-screen h-screen flex-col bg-gray1">
         <Header/>
         <div className="w-full px-0.5">
            <div className="w-full border-gray2 border p-4 space-x-2 rounded shadow flex">
               {users.map((user:any) =>(<Profile
                  user={user}
               />))}
            </div>
         </div>
         {post && <div className="flex flex-col">
            <header className="border-b border-gray-400 w-full flex items-center flex-shrink-0 p-4 text-gray5">
               <div className="border-2 border-gray3 p-0.5 rounded-full">
                  <img 
                     src={post.avatar} 
                     className="rounded-full object-fill w-10 flex-shrink-0"
                  />
               </div>
               <h2 className="text-sm font-semibold ml-2 gray5">{post.username}</h2>
               <BsThreeDots className="ml-auto" size={24}/>
            </header>
            <img src={post.image} alt="" />
         </div>}
      </div>
   )
}

export default Home
