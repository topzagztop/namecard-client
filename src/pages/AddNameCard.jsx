// import React from 'react'

import AddLogo from "../components/AddLogo"
import AddPicture from "../components/AddPicture"
import { useState } from "react"

function AddNameCard() {
    const [file, setFile] = useState(null)
    const [logo, setLogo] = useState(null)
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        businessName: "",
        position: "",
        phone: "",
        email: "",
        logo: "",
        profile: "",
        website: "",
        socialMedia: [],
        theme: "",
    })

    const hdlChange = e => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    // const hdlLogoChange = (logo, name) => {
    //     setFormData({...formData, [name] : logo})
    // }

    const nextStep = () => setStep((prev) => prev + 1)
    const prevStep = () => setStep((prev) => prev - 1)


    return (
        <div className="bg-slate-50 w-full px-8 py-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Business</h1>
                <ul className="flex gap-3 items-center">
                    <li className="text-indigo-900 font-semibold">Step</li>
                    {[1, 2, 3].map((num) => (
                        <li
                        key={num}
                        className={`w-5 h-5 rounded-full flex justify-center items-center text-sm ${
                            step === num ? "bg-indigo-900 text-white" : "bg-gray-300 text-gray-700"
                        }`}
                        >
                        {num}
                        </li>
                    ))}
                </ul>
            </div>
            <form className="flex justify-center" onClick={() => { }}>
                <div className="w-[400px]">
                    {step === 1 && (
                        <div className="flex justify-center px-4 py-12">
                            <div className="flex gap-4 flex-wrap">
                                <input
                                    type="text"
                                    placeholder="Business Name"
                                    className="input input-bordered w-full"
                                    name="businessName"
                                />
                                <input
                                    type="text"
                                    placeholder="Position"
                                    className="input input-bordered w-full"
                                    name="position"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="input input-bordered w-full"
                                    name="phone"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                    name="email"
                                />
                                <AddLogo className="text-blue-600" logo={logo} setLogo={setLogo} nameInput="Upload Logo" />
                                <AddPicture className="text-blue-600" file={file} setFile={setFile} nameInput="Upload Profile" />
                                <input
                                    type="text"
                                    placeholder="Website"
                                    className="input input-bordered w-full"
                                    name="website"
                                />
                                <button onClick={nextStep} className="btn btn-primary w-full">Next</button>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="flex flex-col justify-center px-4 py-12">
                            <h3 className="text-2xl font-semibold">Social Media</h3>
                            <div className="flex gap-4 flex-wrap w-full py-4">
                                <div className="flex gap-4 flex-wrap w-full">
                                    <input
                                        type="text"
                                        placeholder="Line URL"
                                        className="input input-bordered w-full"
                                        name="facebook"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Facebook URL"
                                        className="input input-bordered w-full"
                                        name="facebook"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Instagram URL"
                                        className="input input-bordered w-full"
                                        name="instagram"
                                    />
                                                                        <input
                                        type="text"
                                        placeholder="Linkedin URL"
                                        className="input input-bordered w-full"
                                        name="linkedin"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 items-center mt-4">
                                <button onClick={prevStep} className="btn btn-accent w-40">Previous</button>
                                <button onClick={nextStep} className="btn btn-primary w-40">Next</button>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="flex flex-col justify-center px-4 py-12">
                            <h3 className="text-2xl font-semibold">Choose a Theme</h3>
                            <div className="flex flex-wrap py-4 gap-4">
                            {["Theme 1", "Theme 2", "Theme 3", "Theme 4"].map((theme) => (
                                <button
                                    type="button"
                                    key={theme}
                                    // onClick={() => handleThemeChange(theme)}
                                    className={`border p-2 rounded-lg ${
                                    formData.theme === theme ? "bg-indigo-900 text-white" : "bg-gray-100"
                                    }`}
                                >
                                    {theme}
                                </button>
                             ))}
                            </div>
                            <div className="flex justify-between gap-4 items-center">
                                <button onClick={prevStep} className="btn btn-accent w-40">Previous</button>
                                <button className="btn btn-primary w-40">Save</button>
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default AddNameCard