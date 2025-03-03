import { UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
// import React from 'react'

function AddPicture(props) {
    const { file, setFile, nameInput } = props
    const [preview, setPreview] = useState(null)

    useEffect(()=> {
        if(file) {
            if (typeof file === "string") {
                setPreview(file)
            } else if (file instanceof File || file instanceof Blob) {
                const objectUrl = URL.createObjectURL(file)
                setPreview(objectUrl)

                return () => URL.revokeObjectURL(objectUrl)
            }
        } else {
            setPreview(null)
        }
    }, [file])

    const hdlFileChange = e => {
        const selectedFile = e.target.files[0]
        if(selectedFile) {
            setFile(selectedFile)
        }
        e.target.value = null
    }

    return (
    <div className="flex flex-col p-2 border rounded-lg w-full">
        <div className='bg-slate-100 hover:bg-slate-200 min-h-[150px]
        rounded-lg relative cursor-pointer'
            onClick={() => document.getElementById('input-file').click()}
        >
            <input type="file" className='hidden' id='input-file' accept="image/*"
                onChange={hdlFileChange}
            />
            {
                preview ? (
                <img src={preview} alt='preview image' className='h-full block mx-auto rounded-lg object-cover' />
            ) : (
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className="flex"><UserRound className="w-12 text-gray-400" /> <span className="text-gray-400">{nameInput}</span></div>
            </div>
            )}
            {/* // { !file && } */}
        </div>
    </div>
  )
}

export default AddPicture