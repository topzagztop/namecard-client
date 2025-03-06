import { IdCard } from "lucide-react"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import Loader from "../components/Loader"

function Home() {
    const navigate = useNavigate()

    useEffect(()=> {
        const timer = setTimeout(()=> {
            navigate("/login")
        },3000)

        return () => clearTimeout(timer)

    }, [navigate])

    return (
        <>
            <div className="text-center bg-slate-50 min-h-screen pt-72">
                <div className="flex justify-center">
                    <IdCard className="w-[120px] h-[84px] stroke-[0.5px] stroke-[#312E81]" />
                </div>
                <p className="text-4xl font-semibold text-[#312E81]">NameCard.</p>
                <div className="flex justify-center py-6">
                    <Loader />
                </div>
            </div>
            
        </>
    )
}

export default Home