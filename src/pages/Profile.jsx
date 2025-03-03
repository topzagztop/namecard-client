// import React from 'react'

import { useEffect, useState } from "react"
import AddPicture from "../components/AddPicture"
import useUserStore from "../stores/userStore"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import axios from "axios"

function Profile() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "", 
        phone: "",
        jobPosition: "",
    })
    const [file, setFile] = useState(null)
    const token = useUserStore(state => state.token)
    
    const navigate = useNavigate()

    const fetchProfile = useUserStore(state => state.fetchProfile)

    useEffect(()=> {
        const getProfile = async () => {
            try {
                const rs = await axios.get("http://localhost:8000/user/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setFormData(rs.data.user)

                if(rs.data.user.profileImage) {
                    setFile(rs.data.user.profileImage)
                }
            } catch (err) {
                console.log(err)
                const errMsg = err.response?.data?.error || err.message
                toast.error(errMsg)
            }
        }
        if(token) {
            getProfile()
        }
    },[token])

    console.log(formData)

    const hdlSaveProfile = async (e) => {
        e.preventDefault()
        const body = new FormData
        body.append("firstName", formData.firstName)
        body.append("lastName", formData.lastName)
        body.append("phone", formData.phone)
        body.append("jobPosition", formData.jobPosition)

        if(file instanceof File) {
            body.append("profileImage", file)
        }

        try {
            await axios.patch("http://localhost:8000/user/update", body, {
                headers: {Authorization: `Bearer ${token}`}
            })
            toast.success("Profile updated successfully!")
            await fetchProfile()
            navigate("/")
        } catch (error) {
            console.log(error)
            const errMsg = error.response?.data?.error || error.message
            toast.error(errMsg)
        }
    }

    return (
        <div className="bg-slate-50 w-full px-8 py-6">
            <h1 className="text-2xl font-semibold">Profiles</h1>
            <div className="flex justify-center px-4 py-6">
                <form onSubmit={hdlSaveProfile} className="w-[400px]">
                    <div className="flex gap-4 flex-wrap">
                        <AddPicture className="text-blue-600" file={file} setFile={setFile} nameInput="Upload Profile" />
                        <input
                            type="text"
                            placeholder="Firstname"
                            className="input input-bordered w-full"
                            name="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName : e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Lastname"
                            className="input input-bordered w-full"
                            name="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="input input-bordered w-full"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Job Position"
                            className="input input-bordered w-full"
                            name="jobPosition"
                            value={formData.jobPosition}
                            onChange={(e) => setFormData({...formData, jobPosition: e.target.value})}
                        />
                        <button className="btn btn-secondary w-full">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile