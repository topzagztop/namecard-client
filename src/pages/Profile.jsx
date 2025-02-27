// import React from 'react'

import { useState } from "react"
import AddPicture from "../components/AddPicture"

function Profile() {
    const [file, setFile] = useState(null)
    return (
        <div className="bg-slate-50 w-full px-8 py-6">
            <h1 className="text-2xl font-semibold">Profiles</h1>
            <div className="flex justify-center px-4 py-6">
                <form className="w-[400px]">
                    <div className="flex gap-4 flex-wrap">
                        <AddPicture className="text-blue-600" file={file} setFile={setFile} nameInput="Upload Profile" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            name="email"
                        />
                        <input
                            type="text"
                            placeholder="Firstname"
                            className="input input-bordered w-full"
                            name="firstName"
                        />
                        <input
                            type="text"
                            placeholder="Lastname"
                            className="input input-bordered w-full"
                            name="lastName"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="input input-bordered w-full"
                            name="phone"
                        />
                        <input
                            type="text"
                            placeholder="Job Position"
                            className="input input-bordered w-full"
                            name="jobPosition"
                        />
                        <button className="btn btn-secondary w-full">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile