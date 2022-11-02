import { Dialog, Transition } from "@headlessui/react"
import React, { FC, Fragment } from 'react'
import { IoImagesOutline } from "react-icons/io5"

interface Props {
   isOpen: boolean,
   setOpen: Function
}

const CreatePost:FC<Props> = ({isOpen, setOpen}) => {
   return (
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog 
            open={isOpen} 
            onClose={()=>setOpen(false)}
            as="div"
         >
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
               <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <Dialog.Panel className="w-full text-gray5 max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 border-b border-gray1 py-2 text-center">
                           Create post
                        </Dialog.Title>
                        <div className="w-full flex flex-col text-gray4 justify-center items-center py-20">
                           <IoImagesOutline size={60}/>
                           <p className="my-4 text-xl">Drag photos or videos here</p>
                           <button className="btn">Select from computer</button>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   )
}

export default CreatePost