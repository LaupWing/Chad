import type { NextPage } from "next"
import Header from "../components/Header"
import { createRandomUser } from "../faker"

const Home: NextPage = () => {
   const test = createRandomUser()
   console.log(test)
   return (
      <div className="flex w-screen h-screen flex-col bg-gray1">
         <Header/>
         <div className="w-full px-0.5">
            <div className="w-full border-gray2 border h-20 rounded-b shadow">

            </div>
         </div>
      </div>
   )
}

export default Home
