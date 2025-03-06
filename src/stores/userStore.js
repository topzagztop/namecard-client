import axios from "axios";
import {create} from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"

const useUserStore = create( persist((set, get)=> ({
    user: null,
    token: "",
    login: async (input) => {
        const rs = await axios.post("http://localhost:8000/auth/login" , input)
        set({token: rs.data.token, user: rs.data.user})
        return rs.data
    },
    registerUser : async (body) => {
        const rs = await axios.post("http://localhost:8000/auth/register", body)
    },
    logout: () => set({token: "", user: null}),
    fetchProfile: async () => {
        const token = get().token
        if(token) {
            try {
                const rs = await axios.get("http://localhost:8000/user/me", {
                    headers: {Authorization: `Bearer ${token}`}
                })
                set({user: rs.data.user}) 
            } catch (err) {
                console.log(err)
                set({token: "", user: null}) 
            }
        }
    }
}),{
    name: "state",
    storage: createJSONStorage(()=> localStorage)
}))

useUserStore.subscribe((state) => state.token), (token) => {
    if(token) {
        useUserStore.getState().fetchProfile()
    }
}

export default useUserStore