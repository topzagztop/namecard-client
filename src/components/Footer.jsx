// import React from 'react'

import { Contact, IdCard, Palette, UserRound } from "lucide-react"
import { Link } from "react-router"

function Footer() {
  return (
    <div className="fixed w-full bottom-0 border-t-2 bg-slate-50">
        <div className="flex justify-between px-4 py-2">
            <div className="flex-grow">
                <Link to="/" className="flex flex-col items-center">
                    <IdCard className="w-[32px] h-[22px]" />
                    <p className="font-semibold text-[12px]">Card</p>
                </Link>
            </div>
            <div className="flex-grow">
                <Link to="/theme" className="flex flex-col items-center">
                    <Palette className="w-[32px] h-[22px]" />
                    <p className="font-semibold text-[12px]">Theme</p>
                </Link>
            </div>
            <div className="flex-grow">
                <Link to="/contact" className="flex flex-col items-center">
                    <Contact className="w-[32px] h-[22px]" />
                    <p className="font-semibold text-[12px]">Contact Us</p>
                </Link>
            </div>
            <div className="flex-grow">
                <Link to="/profile" className="flex flex-col items-center">
                    <UserRound className="w-[32px] h-[22px]" />
                    <p className="font-semibold text-[12px]">Profiles</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer