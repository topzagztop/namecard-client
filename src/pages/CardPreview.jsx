// import React from 'react'

import { ChevronLeft, Globe, Mail, Phone } from "lucide-react"
import { Link, useNavigate, useParams } from "react-router"
import useUserStore from "../stores/userStore"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function CardPreview() {
    // const user = useUserStore(state => state.user)
    const { id } = useParams()
    const token = useUserStore(state => state.token)
    const [nameCard, setNameCard] = useState(null)
    const navigate = useNavigate()
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

    const hdlAddContact = async (namecardId) => {
        if (!token) {
            toast.error("Unauthorized: Please log in.");
            return;
        }
        try {
            const rs = await axios.post("http://localhost:8000/contact/add", {namecardId: namecardId}, {
                headers: {Authorization: `Bearer ${token}`}
             })
             toast.success("Add to Contact Successful!")
             navigate("/contact")
        } catch (error) {
            console.log(error);
            const errMsg = error.response?.data?.error || error.message;
            toast.error(errMsg);
            navigate("/contact")
        }
    }

    useEffect(() => {
        fetchNameCardById(id)
    }, [])

    return (
        <div className="bg-slate-50 min-h-screen pt-10 w-full">
            <div className="flex justify-center pb-[120px]">
                {nameCard && (
                    <div className="max-w-[400px] w-full border rounded-xl overflow-hidden h-[730px]">
                        <div className="relative">
                            <div className="px-6 relative z-30 py-6">
                                <Link className="bg-white border rounded-full w-11 h-11 flex justify-center items-center" to="/login">
                                    <ChevronLeft className="w-6 h-6" />
                                </Link>
                            </div>
                            <div className="relative w-full z-10 -top-[100px]">
                                <div className="w-full h-[200px] overflow-hidden">
                                    <img src={nameCard.businessProfile} className="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div className="relative flex justify-center z-20 -top-[150px]">
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={nameCard.user.profileImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative -top-[130px] px-6">
                            <div className="text-center">
                                <h1 className="text-2xl font-bold">{nameCard.user.firstName} {nameCard.user.lastName}</h1>
                                <p className="text-xl font-light text-[#333]">{nameCard.position}</p>
                            </div>
                            <div className="social-media py-6 flex flex-col gap-2">
                                <div className="flex gap-4 items-center justify-start">
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={nameCard.logo} />
                                        </div>
                                    </div>
                                    <div className="text-lg">{nameCard.businessName}</div>
                                </div>
                                <div className="flex gap-4 items-center justify-start">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="text-lg">{nameCard.businessTel}</div>
                                </div>
                                <div className="flex gap-4 items-center justify-start">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="text-lg">{nameCard.businessEmail}</div>
                                </div>
                                <div className="flex gap-4 items-center justify-start">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div className="text-lg">{nameCard.website}</div>
                                </div>
                                <div className="flex gap-4 items-center justify-center">
                                    {nameCard.socialLinked.length > 0 ? (
                                        nameCard.socialLinked.map((link) => {
                                            const icon = {
                                                Facebook: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
                                                Line: "https://upload.wikimedia.org/wikipedia/commons/2/2e/LINE_New_App_Icon_%282020-12%29.png",
                                                Instagram: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
                                                LinkedIn: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                                            }

                                            return (
                                                <div
                                                    key={link.id}
                                                    className="w-14 h-14 flex justify-center items-center"
                                                >
                                                    <Link to={link.url}>
                                                        <img className="w-10 h-10 rounded-full" src={icon[link.socialName]} />
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <p></p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="relative -top-[130px]">
                            <button onClick={()=> hdlAddContact(nameCard.id)} className="btn btn-primary w-full rounded-t-none">
                                Add to Contact
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardPreview