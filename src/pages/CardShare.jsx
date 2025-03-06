// import React from 'react'

import { ChevronLeft, Copy } from "lucide-react"
import { Link, useParams } from "react-router"
import useUserStore from "../stores/userStore"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"

function CardShare() {
    const [copied, setCopied] = useState(false)
    const { id } = useParams()
    const token = useUserStore(state => state.token)
    const [nameCard, setNameCard] = useState(null)
    console.log(nameCard)

    const fetchNameCardById = async (id) => {
        try {
            const rs = await axios.get(`http://localhost:8000/card/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = rs.data.data
            if (!data) {
                return toast.error("NameCard not found")
            }
            setNameCard(data)
        } catch (error) {
            console.log(error);
            const errMsg = error.response?.data?.error || error.message;
            toast.error(errMsg);
        }
    }

    useEffect(() => {
        fetchNameCardById(id)
    }, [])

    const hdlCopy = async() => {
        try {
            const currentUrl = `http://localhost:5173/namecard/${nameCard.slug}`
            await navigator.clipboard.writeText(currentUrl)
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
                {nameCard && (
                    <div className="max-w-[400px] w-full rounded-xl">
                        <div className="relative">
                            <Link className="bg-white border rounded-full w-11 h-11 flex justify-center items-center" to="/login">
                                <ChevronLeft className="w-6 h-6" />
                            </Link>
                            <div className="border bg-white my-6 rounded-lg overflow-hidden p-4">
                                <img
                                    className="w-full"
                                    src={nameCard.qrcode} alt="qrcode" />
                            </div>
                            <label className="input input-bordered flex items-center gap-2 pr-0">
                                <input type="text" className="grow"
                                    value={`http://localhost:5173/namecard/${nameCard.slug}`}
                                    readOnly
                                />
                                <button onClick={hdlCopy} className={`btn btn-primary bg-transparent border-0 ${copied ? "text-green-500" : "text-black"} hover:text-white`}>
                                    <Copy className="w-6 h-6" />
                                    {copied ? "Copied!" : "Copy"}
                                </button>
                            </label>
                            <div className="flex flex-col gap-4 items-center py-8">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={nameCard.user.profileImage} />
                                    </div>
                                </div>
                                <div className="text-lg">{nameCard.businessName}</div>
                                <div className="text-2xl font-bold">
                                    {nameCard.user.firstName} {nameCard.user.lastName}
                                </div>
                                <div className="text-lg font-light">
                                    {nameCard.position}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardShare