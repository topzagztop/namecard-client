import { create } from "zustand";
import {createJSONStorage, persist} from "zustand/middleware"
import axios from "axios";
import { toast } from "react-toastify";

const useNameCardStore = create( persist((set, get) => ({
    nameCard: [],
    fetchNameCards: async (token) => {
        try {
            const rs = await axios.get("http://localhost:8000/card/me", {
                headers: {Authorization: `Bearer ${token}`}
            })
            set({nameCard: rs.data.data}) 
        } catch (error) {
            console.log(error)
            const errMsg = error.response?.data?.error || error.message
            toast.error(errMsg)
        }
    },
}), {
    name: "nameCardState",
    storage: createJSONStorage(()=> localStorage),
}))

export default useNameCardStore