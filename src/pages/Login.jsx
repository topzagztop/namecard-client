// import React from 'react'
import { IdCard } from "lucide-react"
import { Link } from "react-router"

function Login() {
    return (
        <>
            <div className="text-center bg-slate-50 min-h-screen pt-10">
                <div className="flex justify-center">
                    <IdCard className="w-[114px] h-[114px] stroke-[0.5px] stroke-[#312E81]" />
                </div>
                <p className="text-2xl font-semibold text-[#312E81]">NameCard.</p>
                <div className="flex justify-center px-4 py-6">
                    <form action="" className="w-[400px]">
                        <div className="flex gap-4 flex-wrap">
                            <input type="text" placeholder="Email" className="input input-bordered w-full" />
                            <input type="text" placeholder="Password" className="input input-bordered w-full" />
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center">
                    <div className="w-[400px]">
                        <p className="pb-3 text-[#AAAAAA] cursor-pointer">Forgotten password</p>
                        <hr className="pb-3" />
                        <div className="py-3">
                            <Link to="/register" className="btn btn-secondary w-full max-w-64">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login