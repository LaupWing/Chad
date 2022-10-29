import { Dialog, Transition } from "@headlessui/react"
import React, { FC, Fragment } from 'react'

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
            <Dialog.Panel>
               <Dialog.Title>Create new post</Dialog.Title>
            </Dialog.Panel>
         </Dialog>
      </Transition>
   )
}

export default CreatePost