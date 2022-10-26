import React from 'react'

const Profile = ({user}:any) => {
   return (
      <div className="flex-col items-center flex text-xs">
         <div className="p-1 flex items-center justify-center rounded-full bg-gradient-to-r from-gradient1 to-gradient2">
            <div className="flex items-center justify-center rounded-full border-2 border-white">
               <img
                  src={user.avatar}
                  className="rounded-full object-fill w-14"
                  alt="avatar"
               />
            </div>
         </div>
         <h2>{user.username}</h2>
      </div>
   )
}

export default Profile