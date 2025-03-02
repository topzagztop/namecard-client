import { File } from 'lucide-react'
// import React from 'react'

function AddLogo(props) {
    const { logo, setLogo, nameInput } = props

    const hdlFileChange = e => {
        setLogo(e.target.files[0])
    }

    return (
    <div className="flex flex-col p-2 border rounded-lg w-full">
        <div className='bg-slate-100 hover:bg-slate-200 min-h-10 
        rounded-lg relative cursor-pointer'
            onClick={() => document.getElementById('input-logo').click()}
        >
            <input type="file" className='hidden' id='input-logo'
                onChange={hdlFileChange}
            />
            {
                logo &&
                <img src={URL.createObjectURL(logo)} alt='preview image' className='h-full block mx-auto' />
            }
            { !logo && 
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className="flex">
                        <File className="w-12 text-gray-400" /> <span className="text-gray-400">{nameInput}</span>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default AddLogo