// import React from 'react'
import { Link } from "react-router"
import { Eye, Pencil, X } from "lucide-react"

function CardName(props) {
    const { bname, pname, id, onDelete } = props

    return (
        <div className="card rounded-xl bg-indigo-100 h-[150px] justify-center items-center mb-4 relative">
            <p className="text-lg font-light">{bname}</p>
            <h3 className="text-2xl font-bold">{pname}</h3>
            <div className="flex justify-center pt-2 gap-4">
                <Link to={`/editnamecard/${id}`} className="rounded-full bg-indigo-600 w-[30px] h-[30px] text-white flex justify-center items-center cursor-pointer hover:bg-blue-500">
                    <Pencil className="w-[13px] h-[13px]" />
                </Link>

                <Link 
                    className="rounded-full bg-indigo-600 w-[30px] h-[30px] text-white flex justify-center items-center cursor-pointer hover:bg-blue-500" 
                    to={`/preview/${id}`}>
                    <Eye className="w-[13px] h-[13px]" />
                </Link>

                <Link to={`/share/${id}`} className="btn btn-secondary min-h-8 h-8">SHARE</Link>
            </div>
            <div
                onClick={()=> onDelete(id)} 
                className="absolute -top-3 -right-3 border p-1 border-indigo-900 rounded-full cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600">
                <X className="w-5 h-5" />
            </div>
        </div>
    )
}

export default CardName