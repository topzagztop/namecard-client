import { IdCard } from "lucide-react"

function Register() {
    return (
        <>
            <div className="text-center bg-slate-50 min-h-screen pt-10">
                <div className="flex justify-center">
                    <IdCard className="w-[114px] h-[114px] stroke-[0.5px] stroke-[#312E81]" />
                </div>
                <p className="text-2xl font-semibold text-[#312E81]">Register</p>
                <div className="flex justify-center px-4 py-6">
                    <form action="" className="w-[400px]">
                        <div className="flex gap-4 flex-wrap">
                            <input type="text" placeholder="Email" className="input input-bordered w-full" />
                            <input type="text" placeholder="Password" className="input input-bordered w-full" />
                            <input type="text" placeholder="Firstname" className="input input-bordered w-full" />
                            <input type="text" placeholder="Lastname" className="input input-bordered w-full" />
                            <input type="text" placeholder="Phone" className="input input-bordered w-full" />
                            <input type="file" placeholder="Upload Profile" className="input input-bordered w-full" />
                            <button className="btn btn-secondary w-full">Create new account</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register