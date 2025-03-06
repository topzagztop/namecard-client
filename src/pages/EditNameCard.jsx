
import { Eye, File, X } from "lucide-react"
import { useEffect, useState } from "react"
import useThemeStore from "../stores/themeStore"
import useUserStore from "../stores/userStore"
import { useNavigate, useParams } from "react-router"
import { toast } from "react-toastify"
import axios from "axios"
import Button from "../components/Button"


const changeNameCard = {
    businessName: "",
    position: "",
    businessTel: "",
    businessEmail: "",
    logo: "",
    businessProfile: "",
    website: "",
    themeId: null,
    socialLinks: []
}

function EditNameCard() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [profileImage, setProfileImage] = useState(null)
    const [logoImage, setLogoImage] = useState(null)
    const [newSocial, setNewSocial] = useState({ name: "", url: "" })

    const getAllTheme = useThemeStore(state => state.getAllTheme)
    const token = useUserStore(state => state.token)
    const themes = useThemeStore(state => state.themes)
    const [formData, setFormData] = useState(changeNameCard)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const fetchNameCardData = async (id) => {
        try {
            const rs = await axios.get(`http://localhost:8000/card/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = rs.data.data
            setFormData({
                businessName: data.businessName,
                position: data.position,
                businessTel: data.businessTel,
                businessEmail: data.businessEmail,
                logo: data.logo,
                businessProfile: data.businessProfile,
                website: data.website,
                themeId: data.themeId,
                socialLinks: data.socialLinked.map(link => ({
                    name: link.socialName,
                    url: link.url
                }))
            })
            setLogoImage(data.logo)
            setProfileImage(data.businessProfile)
        } catch (err) {
            console.log(err)
            toast.error("Failed to load data")
        }
    }

    useEffect(() => {
        if (id && token) fetchNameCardData(id)
        if (!themes.length && themes) getAllTheme(token)
    }, [id, token, themes, getAllTheme])

    const hdlChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log(formData)

    const hdlFileLogoChange = e => {
        setLogoImage(e.target.files[0])
    }

    const hdlFileProfileChange = e => {
        setProfileImage(e.target.files[0])
    }

    const hdlThemeChange = (themeId) => {
        setFormData({ ...formData, themeId: themeId });
    };

    const availablePlatforms = ["Facebook", "Line", "Instagram", "LinkedIn"]

    const remainingPlatforms = availablePlatforms.filter(platform => !formData.socialLinks.some(link => link.name === platform))

    const addSocialLink = () => {
        if (newSocial.name && newSocial.url) {
            setFormData({
                ...formData,
                socialLinks: [...formData.socialLinks, newSocial]
            })
            setNewSocial({
                name: "",
                url: ""
            })
        }
    }

    const removeSocialLink = (platform) => {
        setFormData({
            ...formData,
            socialLinks: formData.socialLinks.filter(link => link.name !== platform)
        })
    }

    const hdlChangeEdit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const body = new FormData();
    
        body.append("businessName", formData.businessName);
        body.append("position", formData.position);
        body.append("businessTel", formData.businessTel);
        body.append("businessEmail", formData.businessEmail);
        body.append("website", formData.website);
        body.append("themeId", formData.themeId);
        body.append("socialLinks", JSON.stringify(formData.socialLinks));
    

        if (logoImage && logoImage.constructor.name === "File") {
            body.append("logo", logoImage);
        } else if (typeof logoImage === "string") {
            body.append("logo", logoImage);
        }
    
        if (profileImage && profileImage.constructor.name === "File") {
            body.append("businessProfile", profileImage);
        } else if (typeof profileImage === "string") {
            body.append("businessProfile", profileImage);
        }
    
        try {
            const rs = await axios.patch(`http://localhost:8000/card/editnamecard/${id}`, body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("NameCard updated successfully!");
            navigate("/");
        } catch (err) {
            console.log(err);
            toast.error("Failed to update NameCard");
        } finally {
            setIsSubmitting(false)
        }
    };


    return (
        <div className="bg-slate-50 w-full px-8 py-6 md:flex md:justify-center md:pb-20">
            <div className="md:min-w-[1024px]">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Edit Name Card</h1>
                </div>
                <form onSubmit={hdlChangeEdit} className="flex justify-center">
                    <div className="w-[400px]">
                        <div className="flex justify-center px-4 py-12">
                            <div className="flex gap-4 flex-wrap w-full">
                                <input
                                    type="text"
                                    placeholder="Business Name"
                                    className="input input-bordered w-full"
                                    name="businessName"
                                    onChange={hdlChange}
                                    value={formData.businessName}
                                />
                                <input
                                    type="text"
                                    placeholder="Position"
                                    className="input input-bordered w-full"
                                    name="position"
                                    onChange={hdlChange}
                                    value={formData.position}
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="input input-bordered w-full"
                                    name="businessTel"
                                    onChange={hdlChange}
                                    value={formData.businessTel}
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                    name="businessEmail"
                                    onChange={hdlChange}
                                    value={formData.businessEmail}
                                />
                                <input
                                    type="text"
                                    placeholder="Website"
                                    className="input input-bordered w-full"
                                    name="website"
                                    onChange={hdlChange}
                                    value={formData.website}
                                />
                                <div className="flex flex-col p-2 border rounded-lg w-full">
                                    <div className='bg-slate-100 hover:bg-slate-200 min-h-10 
                                        rounded-lg relative cursor-pointer'
                                        onClick={() => document.getElementById('input-logo').click()}
                                    >
                                        <input type="file" className="hidden" id="input-logo" onChange={hdlFileLogoChange} />
                                        {logoImage && <img src={typeof logoImage === "string" ? logoImage : URL.createObjectURL(logoImage)} alt='preview logo' className='h-full block mx-auto' />}
                                        {!logoImage && <div className="flex justify-start items-center h-full"><File className="w-12 text-gray-400" /> <span className="text-gray-400">Upload Logo</span></div>}
                                    </div>
                                </div>
                                <div className="flex flex-col p-2 border rounded-lg w-full">
                                    <div className='bg-slate-100 hover:bg-slate-200 min-h-10 
                                        rounded-lg relative cursor-pointer'
                                        onClick={() => document.getElementById('input-profile').click()}
                                    >
                                        <input type="file" className="hidden" id="input-profile" onChange={hdlFileProfileChange} />
                                        {profileImage && <img src={typeof profileImage === "string" ? profileImage : URL.createObjectURL(profileImage)} alt='preview logo' className='h-full block mx-auto' />}
                                        {!profileImage && <div className="flex justify-start items-center h-full"><File className="w-12 text-gray-400" /> <span className="text-gray-400">Upload Banner Profile</span></div>}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold pt-6">Social Media</h3>
                                <div className="flex gap-4 flex-wrap w-full">
                                    <select
                                        className="select select-bordered w-full"
                                        value={newSocial.name}
                                        onChange={(e) => setNewSocial({ ...newSocial, name: e.target.value })}
                                    >
                                        <option value="" disabled>Select Platform</option>
                                        {remainingPlatforms.map(platform => (
                                            <option key={platform} value={platform}>
                                                {platform}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        className="input input-bordered w-full"
                                        type="text"
                                        placeholder="URL"
                                        value={newSocial.url}
                                        onChange={(e) => setNewSocial({ ...newSocial, url: e.target.value })}
                                    />
                                    <button
                                        className="btn btn-secondary w-full"
                                        type="button"
                                        onClick={addSocialLink}>Add Social Media</button>

                                    {formData.socialLinks.map((link, index) => (
                                        <div key={index} className="w-full p-3 border rounded-lg relative mt-3">
                                            <ul>
                                                <li >{index + 1}. <span className="font-bold">Platform:</span> {link.name} , <span className="font-bold">URL:</span> {link.url}</li>
                                            </ul>
                                            <div onClick={() => removeSocialLink(link.name)}
                                                className="absolute -top-3 -right-3 border p-1 border-indigo-900 rounded-full cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600">
                                                <X className="w-5 h-5" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-semibold pt-6">Choose a Theme</h3>
                                <div className="flex flex-wrap py-4 gap-4 w-full">
                                    {themes?.map((item) => (
                                        <button
                                            type="button"
                                            key={item.id}
                                            onClick={() => hdlThemeChange(item.id)}
                                            className={`relative bg-white border rounded-2xl h-24 basis-[165px] flex-grow cursor-pointer ${
                                                formData.themeId === item.id 
                                                    ? "bg-indigo-900 text-white border-indigo-900" 
                                                    : "bg-gray-100 border-white"
                                                } hover:border-indigo-900`}
                                        >
                                            <Eye className="text-gray-400 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[33px] h-[33px] stroke-slate-400" />
                                            <span className="absolute right-3 bottom-3 text-xs text-gray-400">Theme {item.themeName}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-between gap-4 items-center pt-6 w-full">
                                    <Button
                                        isSubmitting={isSubmitting}
                                        label="Save"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditNameCard