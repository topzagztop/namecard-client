import { UserRound } from 'lucide-react'
// import React from 'react'

function AddPicture(props) {
    const { file, setFile, nameInput } = props

    const hdlFileChange = e => {
        setFile(e.target.files[0])
    }

    return (
    <div className="flex flex-col p-2 border rounded-lg w-full">
        <div className='bg-slate-100 hover:bg-slate-200 min-h-10 
        rounded-lg relative cursor-pointer'
            onClick={() => document.getElementById('input-file').click()}
        >
            <input type="file" className='hidden' id='input-file'
                onChange={hdlFileChange}
            />
            {
                file &&
                <img src={URL.createObjectURL(file)} alt='preview image' className='h-full block mx-auto' />
            }
            { !file && <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className="flex"><UserRound className="w-12 text-gray-400" /> <span className="text-gray-400">{nameInput}</span></div>
            </div>}
        </div>
    </div>
  )
}

export default AddPicture