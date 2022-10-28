import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Profile from "../components/Profile"
import { createRandomPost, createRandomUser } from "../faker"
import { BsThreeDots } from "react-icons/bs"
import FeedItem from "../components/FeedItem"
import Footer from "../components/Footer"

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
               {users.map((user:any, index:number) =>(<Profile
                  user={user}
                  key={index}
               />))}
            </div>
         </div>
         {posts.map((post:any, index:number)=> <FeedItem post={post} key={index}/>)}
         <Footer/>
      </div>
   )
}

export default Home
