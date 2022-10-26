import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Profile from "../components/Profile"
import { createRandomUser } from "../faker"

const Home: NextPage = () => {
   const [users, setUsers] = useState<any>([])
   useEffect(()=>{
      setUsers([...new Array(2)].map(_=>createRandomUser()))
   },[])

   
   return (
      <div className="flex w-screen h-screen flex-col bg-gray1">
         <Header/>
         <div className="w-full px-0.5">
            <div className="w-full border-gray2 border p-2 rounded shadow flex">
               {users.map((user:any) =>(<Profile
                  user={user}
               />))}
            </div>
         </div>
      </div>
   )
}

export default Home
