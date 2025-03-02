import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const themeStore = create(
  persist((set, get) => ({
    themes: [],
    loading: false,
    getAllTheme: async (token) => {
      set({ loading: true });

      try {
        const rs = await axios.get("http://localhost:8000/theme", {
          headers: { Authorization: `Bearer ${token}` },
        })

        set({ themes: rs.data.theme, loading: false });
      } catch (error) {
        toast.error("Error fetching themes:", error);
        set({ loading: false });
      }

    },

  }),{
    name: "theme-storage",
    storage: createJSONStorage(()=> localStorage)
  })
);

export default themeStore;
