import { Dialog } from "@headlessui/react"
import React, { FC } from 'react'

interface Props {
   isOpen: boolean,
   setOpen: Function
}

const CreatePost:FC<Props> = ({isOpen, setOpen}) => {
   return (
      <Dialog open={isOpen} onClose={()=>setOpen(false)}>
         <Dialog.Panel>
            <Dialog.Title>Create new post</Dialog.Title>
         </Dialog.Panel>
      </Dialog>
   )
}

export default CreatePost