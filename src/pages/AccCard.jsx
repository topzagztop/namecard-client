// import React from 'react'

import { Ellipsis, Plus } from "lucide-react"
import CardName from "../components/CardName"

function AccCard() {
  return (
    <div className="bg-slate-50 w-full px-8 py-6">
        <div className="flex justify-between">
            <div className="flex gap-4 items-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h1 className="text-xl text-indigo-900 font-semibold">Andy Codecamp</h1>
                    <p className="text-indigo-400 font-light">Web Developer</p>
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
                    <li><a>Edit</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div className="py-4">
            <button className="btn btn-primary w-full">
                <Plus />
                <span className="text-xl">Add Name Card</span>
            </button>
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