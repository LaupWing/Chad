import type { NextPage } from "next"
import Header from "../components/Header"

const Home: NextPage = () => {
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
