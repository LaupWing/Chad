import type { NextPage } from "next"
import Header from "../components/Header"
import { createRandomUser } from "../faker"

const Home: NextPage = () => {
   const test = createRandomUser()
   
   return (
      <div className="flex w-screen h-screen flex-col bg-gray1">
         <Header/>
         <div className="w-full px-0.5">
            <div className="w-full border-gray2 border p-2 rounded shadow flex">
               <div className="flex-col items-center flex text-xs">
                  <div className="p-1 flex items-center justify-center rounded-full bg-gradient-to-r from-gradient1 to-gradient2">
                     <div className="flex items-center justify-center rounded-full border-2 border-white">
                        <img 
                           src={test.avatar} 
                           className="rounded-full object-fill w-14"
                           alt="avatar" 
                        />
                     </div>
                  </div>
                  {/* <h2>{test.username}</h2> */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
