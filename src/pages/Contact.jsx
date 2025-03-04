// import React from 'react'

import { useEffect, useState } from "react"
import CardContact from "../components/CardContact"
import { toast } from "react-toastify"
import axios from "axios"
import useUserStore from "../stores/userStore"

function Contact() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState()
  const user = useUserStore(state => state.user)
  const token = useUserStore(state => state.token)

  console.log(user.id)

  const fetchContacts = async () => {
    if (!user || !user.id) {
      console.log("User ID is missing.");
      setLoading(false);
      return;
    }

    try {
      const rs = await axios.get(`http://localhost:8000/contact/${user.id}`)
      setContacts(rs.data.contacts)
    } catch (error) {
      console.log(error);
      const errMsg = error.response?.data?.error || error.message;
      toast.error(errMsg);
    } finally {
      setLoading(false)
    }
  }

  const hdlDeleteContact = async (id) => {
    if(window.confirm("Are you sure you want to delete this Contact?")) {
      try {
        await axios.delete(`http://localhost:8000/contact/delete/${id}` ,{
          headers: {Authorization: `Bearer ${token}`}
        })
        toast.success("Delete Contact Successful!")
        fetchContacts()
      } catch (error) {
        console.log(error);
        const errMsg = error.response?.data?.error || error.message;
        toast.error(errMsg);
      }
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [user])

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  console.log(contacts)

  return (
    <div className="bg-slate-50 w-full px-8 py-6">
      <h1 className="text-2xl font-semibold">Contact Us</h1>
      <div className="flex flex-wrap py-4 gap-4">
        {contacts.length > 0 ? (
          contacts.map((contact) => {
            const namecard = contact.contacts?.namecard;
            const user = contact.user;

            return (
              <CardContact
                key={contact.id}
                id={contact.contactId}
                imgProfile={user.profileImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} // ✅ กันกรณีไม่มีรูป
                imgBrand={namecard.logo || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} // ✅ กันกรณีไม่มีรูป
                phone={namecard.businessTel}
                bussinessName={namecard.businessName}
                userName={`${user.firstName} ${user.lastName}`}
                position={namecard.position}
                email={namecard.businessEmail}
                hdlDeleteContact={hdlDeleteContact}
              />
            );
          })
        ) : (
          <p>No contacts found.</p>
        )}

        {/* <CardContact 
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
             /> */}
      </div>
    </div>
  )
}

export default Contact