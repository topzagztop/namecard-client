// import React from 'react'

import { ChevronLeft, Copy } from "lucide-react"
import { Link } from "react-router"
import useUserStore from "../stores/userStore"
import { useState } from "react"
import { toast } from "react-toastify"

function CardShare() {
    const user = useUserStore(state => state.user)
    const [url] = useState("http://localhost:5173/namecard/26bZK30MR6")
    const [copied, setCopied] = useState(false)

    const hdlCopy = async() => {
        try {
            await navigator.clipboard.writeText(url)
            setCopied(true)
            toast("Copy Successful")
            setTimeout(()=> setCopied(false), 3000)
        } catch (error) {
            toast.error("Failed to copy URL", error)
        }
    }

    return (
        <div className="bg-slate-50 pt-10 w-full">
            <div className="flex justify-center pb-[80px]">
                <div className="max-w-[400px] w-full rounded-xl">
                    <div className="relative">
                        <Link className="bg-white border rounded-full w-11 h-11 flex justify-center items-center" to="/login">
                            <ChevronLeft className="w-6 h-6" />
                        </Link>
                        <div className="border bg-white my-6 rounded-lg overflow-hidden p-4">
                            <img
                                className="w-full"
                                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1740728668/qrcode/y6ncrkxqymwyypjdkvs2.png" alt="qrcode" />
                        </div>
                        <label className="input input-bordered flex items-center gap-2 pr-0">
                            <input type="text" className="grow"
                                value="http://localhost:5173/namecard/26bZK30MR6"
                            />
                            <button onClick={hdlCopy} className="btn btn-primary bg-transparent border-0 text-black hover:text-white">
                                <Copy className="w-6 h-6" />
                                {copied ? "Copied!" : "Copy"}
                            </button>
                        </label>
                        <div className="flex flex-col gap-4 items-center py-8">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src={user.profileImage} />
                                </div>
                            </div>
                            <div className="text-lg">Opn Pro Software Solution</div>
                            <div className="text-2xl font-bold">
                                {user.firstName} {user.lastName}
                            </div>
                            <div className="text-lg font-light">
                                {user.jobPosition}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardShare