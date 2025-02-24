import { Outlet } from "react-router"
import Header from "./components/header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="relative flex bg-slate-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App