import { Plus } from "lucide-react"
import CardName from "../components/CardName"
import useUserStore from "../stores/userStore"
import { Link } from "react-router"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import useNameCardStore from "../stores/nameCardStore"
import ProfileHeader from "../components/ProfileHeader"
import SkeletonCard from "../components/SkeletonCard"

function AccCard() {
    const user = useUserStore(state => state.user)
    const token = useUserStore(state => state.token)
    const logout = useUserStore(state => state.logout)
    const fetchNameCards = useNameCardStore(state => state.fetchNameCards)
    const nameCards = useNameCardStore(state => state.nameCard)
    const clearNameCard = useNameCardStore(state => state.clearNameCard)
    const deleteNameCard = useNameCardStore(state => state.deleteNameCard)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const hdlLogout = () => {
        logout()
        clearNameCard()
    }

    useEffect(()=> {
        if(token) {
            setLoading(true)
            fetchNameCards(token)
                .catch((err)=> {
                    const errMsg = err.response?.data?.error || err.message;
                    setError(errMsg)
                    toast.error(errMsg)
                })
                .finally(()=> setLoading(false))
        }
    },[token, user])

  return (
    <div className="bg-slate-50 w-full px-8 py-6 md:flex md:justify-center md:pb-20">
        <div className="md:min-w-[1024px]">
            <ProfileHeader
                user={user}
                hdlLogout={hdlLogout}
            />
            <div className="py-4">
                <Link to="/addnamecard" className="btn btn-primary w-full">
                    <Plus />
                    <span className="text-xl">Add Name Card</span>
                </Link>
            </div>
            <div className="py-4">
                {loading ? (
                    <>
                        <SkeletonCard />
                        <SkeletonCard />
                    </>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : nameCards.length > 0 ? (
                    nameCards.map((card)=> (
                        <CardName
                            key={card.id} 
                            id={card.id}
                            bname={card.businessName} 
                            pname={card.position}
                            onDelete={()=> deleteNameCard(card.id, token)}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-400">No Name Card Found</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default AccCard