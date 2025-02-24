// import React from 'react'
import { Link } from "react-router"
import { Eye, Pencil, X } from "lucide-react"

function CardName(props) {
    const {bname, pname} = props
    return (
        <div className="card rounded-xl bg-indigo-100 h-[150px] justify-center items-center mb-4 relative">
            <p className="text-lg font-light">{bname}</p>
            <h3 className="text-2xl font-bold">{pname}</h3>
            <div className="flex justify-center pt-2 gap-4">
                <div className="rounded-full bg-indigo-600 w-[30px] h-[30px] text-white flex justify-center items-center cursor-pointer">
                    <Pencil className="w-[13px] h-[13px]" />
                </div>
                <div className="rounded-full bg-indigo-600 w-[30px] h-[30px] text-white flex justify-center items-center cursor-pointer">
                    <Eye className="w-[13px] h-[13px]" />
                </div>
                <div>
                    <Link to="/preview" className="btn btn-secondary min-h-8 h-8">SHARE</Link>
                </div>
            </div>
            <div className="absolute -top-3 -right-3 border p-1 border-indigo-900 rounded-full cursor-pointer hover:bg-indigo-900 hover:text-white">
                <X className="w-5 h-5" />
            </div>
        </div>
    )
}

export default CardName