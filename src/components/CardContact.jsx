import { Mail, Phone } from 'lucide-react'
// import React from 'react'

function CardContact(props) {
    const { imgProfile, imgBrand, phone, bussinessName, userName, position, email } = props
    return (
        <div className="border rounded-lg w-full bg-white py-6 px-6">
            <div className="flex gap-3 justify-between items-center">
                <div>
                    <div className="flex gap-4 pb-2">
                        <div className="avatar">
                            <div className="w-20 h-20 rounded-full">
                            <img src={imgProfile} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-20 h-20 rounded-full">
                                <img src={imgBrand} />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center justify-center">
                        <Phone className="w-[17px] h-[17px] stroke-gray-500" /><span className="text-gray-500">{phone}</span>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm font-semibold">{bussinessName}</p>
                    <p className="font-bold">{userName}</p>
                    <p className="font-light text-gray-500">{position}</p>
                    <p className="font-light text-gray-500 flex gap-2 justify-end"><span><Mail /></span> {email}</p>
                </div>
            </div>
        </div>
    )
}

export default CardContact