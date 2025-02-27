// import React from 'react'

import CardContact from "../components/CardContact"

function Contact() {
  return (
    <div className="bg-slate-50 w-full px-8 py-6">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        <div className="flex flex-wrap py-4 gap-4">
            <CardContact 
                imgProfile="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                imgBrand="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                phone="088-545-9883"
                bussinessName="Opn Pro Software Solution"
                userName="Andy Codecamp"
                position="Web Developer"
                email="andy@opn.coo"
             />
            <CardContact 
                imgProfile="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                imgBrand="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                phone="088-545-9883"
                bussinessName="Opn Pro Software Solution"
                userName="Andy Codecamp"
                position="Web Developer"
                email="andy@opn.coo"
             />
             <CardContact 
                imgProfile="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                imgBrand="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                phone="088-545-9883"
                bussinessName="Opn Pro Software Solution"
                userName="Andy Codecamp"
                position="Web Developer"
                email="andy@opn.coo"
             />
        </div>
    </div>
  )
}

export default Contact