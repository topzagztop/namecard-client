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
            if(error.response?.status === 404) {
                set({nameCard: []})
            } else {
                console.log(error)
                const errMsg = error.response?.data?.error || error.message
                toast.error(errMsg)
            }
            
        }
    },
    clearNameCard: () => set({nameCard: []}),
    deleteNameCard: async (id, token) => {
            if (window.confirm("Are you sure you want to delete this NameCard?")) {
                try {
                    await axios.delete(`http://localhost:8000/card/${id}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    toast.success("Delete NameCard Successful");
                    get().fetchNameCards(token);
                } catch (error) {
                    console.log(error);
                    const errMsg = error.response?.data?.error || error.message;
                    toast.error(errMsg);
                }
            }
        },
}), {
    name: "nameCardState",
    storage: createJSONStorage(()=> localStorage),
}))

export default useNameCardStore