import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Profile from "../components/Profile"
import { createRandomPost, createRandomUser } from "../faker"
import FeedItem from "../components/FeedItem"
import Footer from "../components/Footer"
import CreatePost from "../components/CreatePost"

const Home: NextPage = () => {
   const [users, setUsers] = useState<any>([])
   const [posts, setPosts] = useState<any>([])
   const [isOpen, setOpen] = useState(false)

   useEffect(()=>{
      setUsers([...new Array(2)].map(_=>createRandomUser()))
      setPosts([...new Array(2)].map(_=>createRandomPost()))
   },[])

   
   return (
      <div className="flex w-screen min-h-screen flex-col bg-gray1">
         <CreatePost isOpen={isOpen} setOpen={setOpen}/>
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
         <button onClick={()=>setOpen(true)}>Open</button>
         <Footer/>
      </div>
   )
}

export default Home
