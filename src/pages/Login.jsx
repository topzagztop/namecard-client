// import React from 'react'
import { IdCard } from "lucide-react"
import { Link } from "react-router"
import useUserStore from "../stores/userStore"
import { useState } from "react"
import { toast } from "react-toastify"
import Button from "../components/Button"


const userLogin = {
    email: "",
    password: "",
}

function Login() {
    const login = useUserStore(state => state.login)
    const [input, setInput] = useState(userLogin)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const hdlChange = async e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlLogin = async e => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const { email, password } = input

            if (!email.trim() || !password.trim()) {
                setIsSubmitting(false)
                return toast.error("Please fill inputs Email and Password")
            }

            let data = await login(input)
            toast.success("Login successfull")

        } catch (error) {
            const errMsg = error.response?.data?.error || error.message
            toast.error(errMsg)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="text-center bg-slate-50 min-h-screen pt-10">
            <div className="flex justify-center">
                <IdCard className="w-[114px] h-[114px] stroke-[0.5px] stroke-[#312E81]" />
            </div>
            <p className="text-2xl font-semibold text-[#312E81]">NameCard.</p>
            <div className="flex justify-center px-4 py-6">
                <form onSubmit={hdlLogin} className="w-[400px]">
                    <div className="flex gap-4 flex-wrap">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            name="email"
                            onChange={hdlChange}
                            value={input.email}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            name="password"
                            onChange={hdlChange}
                            value={input.password}
                        />
                        <Button
                            isSubmitting={isSubmitting}
                            label="Login"
                        />
                        {/* <button className="btn btn-primary w-full">Login</button> */}
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
    )
}

export default Login