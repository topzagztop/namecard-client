// import React from 'react'

import { Ellipsis } from "lucide-react"
import { Link } from "react-router"

function ProfileHeader(props) {
    const {user, hdlLogout} = props
  return (
        <div className="flex justify-between">
            <div className="flex gap-4 items-center">
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={user.profileImage} />
                    </div>
                </div>
                <div>
                    <h1 className="text-xl text-indigo-900 font-semibold">{user.firstName} {user.lastName}</h1>
                    <p className="text-indigo-400 font-light">{user.jobPosition}</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                    <Ellipsis className="w-[24px] h-[24px]" />
                </div>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                    <li><Link to="/profile">Edit</Link></li>
                    <li onClick={hdlLogout}><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
  )
}

export default ProfileHeader