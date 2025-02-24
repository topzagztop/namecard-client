// import React from 'react'

import { Mail, Phone } from "lucide-react"

function Contact() {
  return (
    <div className="bg-slate-50 w-full px-8 py-6">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        <div className="flex flex-wrap py-4 gap-4">
            <div className="border rounded-lg w-full bg-white py-6 px-6">
                <div className="flex gap-3 justify-between items-center">
                    <div>
                        <div className="flex gap-4 pb-2">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                            <Phone className="w-[17px] h-[17px] stroke-gray-500" /><span className="text-gray-500">088-545-9883</span>
                        </div>
                    </div> 
                    <div className="text-right">
                        <p className="text-sm font-semibold">Opn Pro Software Solution</p>
                        <p className="font-bold">Andy Codecamp</p>
                        <p className="font-light text-gray-500">Web Developer</p>
                        <p className="font-light text-gray-500 flex gap-2 justify-end"><span><Mail /></span> andy@opn.coo</p>
                    </div>
                </div>
            </div> 
            <div className="border rounded-lg w-full bg-white py-6 px-6">
                <div className="flex gap-3 justify-between items-center">
                    <div>
                        <div className="flex gap-4 pb-2">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                            <Phone className="w-[17px] h-[17px] stroke-gray-500" /><span className="text-gray-500">088-545-9883</span>
                        </div>
                    </div> 
                    <div className="text-right">
                        <p className="text-sm font-semibold">Opn Pro Software Solution</p>
                        <p className="font-bold">Andy Codecamp</p>
                        <p className="font-light text-gray-500">Web Developer</p>
                        <p className="font-light text-gray-500 flex gap-2 justify-end"><span><Mail /></span> andy@opn.coo</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Contact