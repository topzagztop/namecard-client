// import React from 'react'

import { Ellipsis, Plus } from "lucide-react"
import CardName from "../components/CardName"
import useUserStore from "../stores/userStore"
import { Link } from "react-router"

function AccCard() {
    const user = useUserStore(state => state.user)
    const logout = useUserStore(state => state.logout)
    console.log(user)
  return (
    <div className="bg-slate-50 w-full px-8 py-6">
        <div className="flex justify-between">
            <div className="flex gap-4 items-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
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
                    <li onClick={logout}><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div className="py-4">
            <Link to="/addnamecard" className="btn btn-primary w-full">
                <Plus />
                <span className="text-xl">Add Name Card</span>
            </Link>
        </div>
        <div className="py-4">
            <CardName bname="OPN TH Co.,Ltd." pname="Full Stack Developer" />
            <CardName bname="Codecamp Thailand" pname="Student" />
            <CardName bname="ASD Co., Ltd." pname="Chief Executive Officer" />
        </div>
    </div>
  )
}

export default AccCard