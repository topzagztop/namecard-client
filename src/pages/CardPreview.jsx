// import React from 'react'

import { ChevronLeft, Globe, Mail, Phone } from "lucide-react"
import { Link } from "react-router"
import useUserStore from "../stores/userStore"

function CardPreview() {
    const user = useUserStore(state => state.user)
    return (
        <div className="bg-slate-50 min-h-screen pt-10 w-full">
            <div className="flex justify-center pb-[120px]">
                <div className="max-w-[400px] w-full border rounded-xl overflow-hidden h-[730px]">
                    <div className="relative">
                        <div className="px-6 relative z-30 py-6">
                            <Link className="bg-white border rounded-full w-11 h-11 flex justify-center items-center" to="/login">
                                <ChevronLeft className="w-6 h-6" />
                            </Link>
                        </div>
                        <div className="relative w-full z-10 -top-[100px]">
                            <div className="w-full h-[200px] overflow-hidden">
                                <img src="https://s.yimg.com/ny/api/res/1.2/cYnCmX_fqBTI1Xd6otTkFg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en-US/the_block_83/d269d20316dac1a097825406d358d9b7" className="h-full w-full object-cover" />
                            </div>
                        </div>
                        <div className="relative flex justify-center z-20 -top-[150px]">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={user.profileImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative -top-[130px] px-6">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
                            <p className="text-xl font-light text-[#333]">{user.jobPosition}</p>
                        </div>
                        <div className="social-media py-6 flex flex-col gap-2">
                            <div className="flex gap-4 items-center justify-start">
                                <div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={user.profileImage} />
                                    </div>
                                </div>
                                <div className="text-lg">Opn Pro Software Solution</div>
                            </div>
                            <div className="flex gap-4 items-center justify-start">
                                <div className="w-14 h-14 flex justify-center items-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="text-lg">+6688-545-9883</div>
                            </div>
                            <div className="flex gap-4 items-center justify-start">
                                <div className="w-14 h-14 flex justify-center items-center">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="text-lg">andy@opn.ooo</div>
                            </div>
                            <div className="flex gap-4 items-center justify-start">
                                <div className="w-14 h-14 flex justify-center items-center">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div className="text-lg">https://www.opn.ooo</div>
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <div className="w-14 h-14 flex justify-center items-center">
                                    <Link>
                                        <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/2/2e/LINE_New_App_Icon_%282020-12%29.png" />
                                    </Link>
                                </div>
                                <div className="w-14 h-14 flex justify-center items-center">
                                    <Link>
                                        <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" />
                                    </Link>
                                </div>
                                <div className="w-14 h-14 flex justify-center items-center">
                                    <Link>
                                        <img className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
                                    </Link>
                                </div>
                                <div className="w-14 h-14 flex justify-center items-center">
                                    <Link>
                                        <img className="w-10 h-10 rounded-full" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" />
                                    </Link>
                                </div>
                            </div>
                        </div>     
                    </div>
                    <div className="relative -top-[130px]">
                        <button className="btn btn-primary w-full rounded-t-none">
                            Add to Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPreview