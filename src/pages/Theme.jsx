import { useEffect } from "react"
import CardTheme from "../components/CardTheme"
import useThemeStore from "../stores/themeStore"
import useUserStore from "../stores/userStore"

function Theme() {
  const getAllTheme = useThemeStore(state => state.getAllTheme)
  const token = useUserStore(state => state.token)
  const themes = useThemeStore(state => state.themes)

  useEffect(()=> {
    if(!themes.length && themes) {
      getAllTheme(token)
    }
  },[themes, token, getAllTheme])

  return (
    <div className="bg-slate-50 w-full px-8 py-6 md:flex md:justify-center">
      <div className="md:min-w-[1024px]">
          <h1 className="text-2xl font-semibold">My Theme</h1>
          <div className="flex flex-wrap py-4 gap-4">
            {themes && themes.length > 0 ? (
              themes.map((item) => (
                <CardTheme key={item.id} name={item.themeName} />
              ))
            ): (
              <p>Loading theme...</p>
            )}
          </div>
        </div>
    </div>
  )
}

export default Theme