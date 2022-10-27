import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Profile from "../components/Profile"
import { createRandomPost, createRandomUser } from "../faker"
import { BsThreeDots } from "react-icons/bs"
import FeedItem from "../components/FeedItem"

const Home: NextPage = () => {
   const [users, setUsers] = useState<any>([])
   const [posts, setPosts] = useState<any>([])

   useEffect(()=>{
      setUsers([...new Array(2)].map(_=>createRandomUser()))
      setPosts([...new Array(2)].map(_=>createRandomPost()))
   },[])

   
   return (
      <div className="flex w-screen min-h-screen flex-col bg-gray1">
         <Header/>
         <div className="w-full px-0.5">
            <div className="w-full border-gray2 border p-4 space-x-2 rounded shadow flex">
               {users.map((user:any) =>(<Profile
                  user={user}
               />))}
            </div>
         </div>
         {posts.map((post:any)=> <FeedItem post={post}/>)}
      </div>
   )
}

export default Home
