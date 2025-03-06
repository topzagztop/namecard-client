// import React from 'react'

import axios from "axios";
import { Globe, Mail, Phone } from "lucide-react"
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import { toast } from "react-toastify";
import useUserStore from "../stores/userStore";

function NameCard() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [namecard, setNameCard] = useState(null)
    // console.log(namecard)
    const token = useUserStore(state => state.token)

    const fetchNameCard = async (slug) => {
        try {
            const rs = await axios.get(`http://localhost:8000/card/namecard/${slug}`)
            const data = rs.data.data
            if (!data) {
                return toast.error("NameCard not found")
            }
            setNameCard(data)
        } catch (error) {
            console.log(error);
            const errMsg = error.response?.data?.error || error.message;
            toast.error(errMsg);
        } finally {
            setLoading(false)
        }
    }

    const hdlAddContact = async (namecardId) => {
        if (!token) {
            toast.error("Unauthorized: Please log in.");
            setTimeout(()=> {
                navigate("/login")
            }, 3000)
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
        if (slug) {
            fetchNameCard(slug)
        }
    }, [slug])

    if (loading) return <p>Loading...</p>
    if (!namecard) return <p>Namecard not found.</p>

    return (
        <div className="min-h-screen pt-1 w-full md:pb-20">
            <div className="flex justify-center">
                {namecard && (
                    <div className="max-w-[400px] w-full border rounded-xl overflow-hidden relative">
                        <div className="relative w-full z-10">
                            <div className="w-full h-[200px] overflow-hidden">
                                <img src={namecard.businessProfile} className="h-full w-full object-cover" />
                            </div>
                        </div>
                        <div className="relative -top-12">
                            <div className="relative flex justify-center z-20">
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={namecard.user.profileImage} />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center pt-4">
                                <h1 className="text-2xl font-bold">
                                    {namecard.user.firstName} {namecard.user.lastName}
                                </h1>
                                <p className="text-xl font-light text-[#333]">
                                    {namecard.position}
                                </p>
                            </div>
                            <div className="social-media py-6 flex flex-col gap-2 px-6">
                                <div className="flex gap-4 items-center justify-start">
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img
                                                src={namecard.logo}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-lg">{namecard.businessName}</div>
                                </div>
                                <div className="flex gap-4 items-center justify-start">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="text-lg">{namecard.businessTel}</div>
                                </div>
                                <div className="flex gap-4 items-center justify-start">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="text-lg">{namecard.businessEmail}</div>
                                </div>
                                <div className="flex gap-4 items-center justify-start">
                                    <div className="w-14 h-14 flex justify-center items-center">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div className="text-lg">{namecard.website}</div>
                                </div>
                                <div className="flex gap-4 items-center justify-center relative top-6">
                                    {namecard.socialLinked.length > 0 ? (
                                        namecard.socialLinked.map((link) => {
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
                        <div className="relative cursor-pointer">
                            <button onClick={()=> hdlAddContact(namecard.id)} className="btn btn-primary w-full rounded-t-none cursor-pointer">
                                Add to Contact
                            </button>
                        </div>
                    </div>
                )
                }

            </div>
        </div>
    )
}

export default NameCard