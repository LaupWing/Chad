import React from 'react'
import { AiFillCustomerService, AiFillPlaySquare, AiOutlineHome, AiOutlineSearch } from "react-icons/ai"

const Footer = () => {
   return (
      <footer className="bottom-0 sticky bg-gray1 text-gray5 flex justify-between p-4 border-t border-gray2">
         <AiOutlineHome size={35}/>
         <AiOutlineSearch size={35}/>
         <AiFillPlaySquare size={35}/>
         <AiFillCustomerService size={35}/>
      </footer>
   )
}

export default Footer