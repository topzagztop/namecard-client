import { ChevronLeft, IdCard } from "lucide-react"
import { Link, useNavigate } from "react-router"
import { toast } from "react-toastify"
import { useState } from "react"
import AddPicture from "../components/AddPicture"
import useUserStore from "../stores/userStore"
import Button from "../components/Button"

const initInput = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    jobPosition: "",
    profileImage: "",
}

function Register() {
    const [input, setInput] = useState(initInput)
    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const registerUser = useUserStore(state => state.registerUser)


    const hdlChange = e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlClearInput = () => {
        setInput(initInput)
        setFile(null)
    }

    const hdlRegister = async e => {
        e.preventDefault()
        setIsSubmitting(true)
        const { email, password, confirmPassword, firstName, lastName, phone, jobPosition } = input
        if (!email.trim() || !password.trim() || !confirmPassword.trim() || !firstName.trim() || !lastName.trim() || !phone.trim() || !jobPosition.trim()) {
            setIsSubmitting(false)
            return toast.error("Please fill all input")
        }
        if (password !== confirmPassword) {
            setIsSubmitting(false)
            return toast.error("Password and Confirm Password unmatched !!!")
        }

        const body = new FormData()
        // แปลงวัตถุ (Object) เป็น Array ของ key-value pairs (คู่คีย์และค่า)
        Object.entries(input).forEach(([key , value]) => {
            body.append(key, value)
        })
        // body.append("email", email)
        // body.append("password", password)
        // body.append("confirmPassword", confirmPassword)
        // body.append("firstName", firstName)
        // body.append("lastName", lastName)
        // body.append("phone", phone)
        // body.append("jobPosition", jobPosition)

        if (file) {
            body.append("profileImage", file)
        }

        try {
            const rs = await registerUser(body)

            hdlClearInput()
            setFile(null)
            toast.success("Register Successful")
            
            navigate("/login")

        } catch (error) {
            console.log(error)
            const errMsg = error.response?.data?.error || error.message
            toast.error(errMsg)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <div className="bg-slate-50 min-h-screen pt-10">
                <div className="px-6">
                    <Link className="bg-white border rounded-full w-11 h-11 flex justify-center items-center" to="/login">
                        <ChevronLeft className="w-6 h-6" />
                    </Link>
                </div>
                <div className="flex justify-center">
                    <IdCard className="w-[114px] h-[114px] stroke-[0.5px] stroke-[#312E81]" />
                </div>
                <p className="text-center text-2xl font-semibold text-[#312E81]">Register</p>
                <div className="flex justify-center px-4 py-6">
                    <form onSubmit={hdlRegister} className="w-[400px]">
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
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full"
                                name="confirmPassword"
                                onChange={hdlChange}
                                value={input.confirmPassword}
                            />
                            <input
                                type="text"
                                placeholder="Firstname"
                                className="input input-bordered w-full"
                                name="firstName"
                                onChange={hdlChange}
                                value={input.firstName}
                            />
                            <input
                                type="text"
                                placeholder="Lastname"
                                className="input input-bordered w-full"
                                name="lastName"
                                onChange={hdlChange}
                                value={input.lastName}
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="input input-bordered w-full"
                                name="phone"
                                onChange={hdlChange}
                                value={input.phone}
                            />
                            <input
                                type="text"
                                placeholder="Job Position"
                                className="input input-bordered w-full"
                                name="jobPosition"
                                onChange={hdlChange}
                                value={input.jobPosition}
                            />
                            <AddPicture className="text-blue-600" file={file} setFile={setFile} nameInput="Upload Profile" />
                            <Button
                                isSubmitting={isSubmitting}
                                label="Create new account"
                            />
                            <button
                                type="button"
                                className="btn btn-secondary w-full"
                                onClick={hdlClearInput}
                            >Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register